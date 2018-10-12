import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the BotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BotProvider {
  private messages = [];
  public key:string = "messages";

  // sqlite related variables
  database: SQLiteObject;

  constructor(public http: HttpClient,
    public alertCtrl: AlertController, 
    public sqlite: SQLite,
    public platform: Platform,
    private nativeStorage: NativeStorage) {
      
  }

  createDb() {
    // check if device ready
    this.platform.ready().then(() => {
      // created database
      this.sqlite.create({
        name: "slangs.db",
        location: "default"
      }).then((db: SQLiteObject) => {
        this.database = db;
 
        // create table
        this.database.executeSql("CREATE TABLE IF NOT EXISTS tblSlangs(slang VARCHAR(255), meaning VARCHAR(255), sentence VARCHAR(255), usages INT(11))")
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));         
      });
    });
  }

  getMessages() {
    this.nativeStorage.getItem(this.key)
    .then(
      data => function() {
        if(data != null && data != undefined) {
          this.messages = JSON.parse(data);
        }
        console.log(data);
      },
      error => console.error(error)
    );
   
    return this.messages;
  }

  // check if user used an australian slang 
  checkForSlangs(message, slangs) {
    //convert message to lower case
    let msg = message.toLowerCase();
    // check all slangs
    slangs.forEach(function(slang) {
      // check if slang is used
      if(msg.indexOf(slang.slang.toLowerCase()) != -1) {
        this.numberofUsage(slang);
      }
    }.bind(this)); // bind this so methods will work
  }

  numberofUsage(slangs) {
    let search = [slangs.slang];
    let insert = [slangs.slang, slangs.meaning, slangs.sentence, 1];
   
    return this.database.executeSql("SELECT * FROM tblSlangs WHERE slang = ?", search).then(data => {
      let update = [2];
      if(data.rows.length <= 0) {
        this.database.executeSql("INSERT INTO tblSlangs(slang, meaning, sentence, usages) VALUES(?, ?, ?, ?)", insert).then(res => {
          this.showAlert("You have use " + insert[0] + " for the first time!", insert[0] + " means " + insert[1]);
        });
      } else {
        this.database.executeSql("UPDATE tblSlangs SET usages = ?", update).then(res => {
          this.showAlert("You used " + insert[0] + " times " + update + " already! Keep it up.", insert[0] + " means " + insert[1]);
        });
      }
    })
    .then(() => console.log('Executed SQL'))
    .catch(e => console.log(e)); 
  }

  getUsedSlangs() {
    
    return new Promise((resolve, reject) => {
      this.database.executeSql('SELECT * from tblSlangs', []).then((data) => {
        let activityValues = [];
        if (data.rows.length > 0) {
          for(let i=0; i <data.rows.length; i++) {
            activityValues.push(data.rows.item(i));
          }
        }
       
        resolve(activityValues);
       
      }, (error) => {
        reject(error);
      })
    });
  }

  // 
  sendMessages(message, type) {

    this.nativeStorage.setItem(this.key, {
      type: type,
      message: message
    }).then(
      data => console.log(data),
      error => console.error(error)
    );

    this.messages.push({
      type: type,
      message: message
    });
  }

  // show regular alert
  showAlert(title, subtitle) {
    // create alert
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    // execute alert
    alert.present();
  }

  convo() {
    let convo = [
      "Which TV show do you want your life to be like?",
      "What is your guilty pleasure?",
      "What do you wish your phone could do?",
      "How have TV shows changed over the years?",
      "If you had a personal mascot, what would your mascot be?",
      "What weird or useless talent do you have?",
      "What is the most annoying app you have tried?",
      "Are bigger or small schools better?",
      "What movie scene choked you up the most?",
      "Whats your favorite genre of movie?",
      "Who are some of your favorite athletes?",
      "How do you think traveling to a lot of different countries changes a person?",
      "What is the longest book you have read?",
      "If your life was a meal, what would kind of meal would it be?",
      "Whats the best / worst thing about your work / school?",
      "What was the last song you listened to?",
      "Is teaching a skill that can be taught?",
      "What would be your perfect weekend?",
      "What was the last funny video you saw?",
      "What or who has taught you most of the information you use on a regular basis?",
      "What food looks disgusting but tastes delicious?",
      "Are you very active of do you prefer to just relax in your free time?",
      "Time freezes for everyone but you for one day. What do you do?",
      "What is a fashion trend you are really glad went away?",
      "What three words best describe you?",
      "What are some things you want to accomplish before you die?",
      "What is the worst restaurant you have ever eaten at?",
      "Who was your best friend in elementary school?",
      "What do you do when you hang out with your friends?",
      "What do you do to improve your mood when you are in a bad mood?",
      "What are some goals you have failed to accomplish?",
      "What animal or insect do you wish humans could eradicate?",
      "What did you do on your last vacation?",
      "What are the three best apps on your phone?",
      "How often do you go to the library?",
      "What will be the future of TV shows?",
      "What do you think the next big technological advance will be?",
      "Whats the best thing to do on a cold winter day?",
      "What were you really into when you were a kid?",
      "What do you think of homeschooling?",
      "What is the strangest app you have heard of or tried?",
      "Who are the 3 greatest athletes of all time?",
      "What cartoons did you watch as a child?",
      "What is the longest plane trip you have taken?",
      "If some of the lesser known holidays were commercialized, what would the commercialization look like?",
      "Whats the strangest movie you have ever seen?",
      "Where is the most relaxing place you have been?",
      "Do you always have to have the latest phone?",
      "What do app makers do that really annoys you?",
      "What do you know about the history of some holidays?",
      "When was the last time you had a food fight?",
      "Do movies have the same power as books to change the world?",
      "Where would you like to travel next?",
      "What do you do to get rid of stress?",
      "What are some good and bad things about the education system in your country?",
      "What was the most over hyped place youve traveled to?",
      "If you opened a restaurant, what kind of food would you serve?",
      "Does fashion help society in any way?",
      "Who do you think has the biggest impact on fashion trends: actors and actresses, musicians, fashion designers, or consumers?",
      "What scifi movie or book would you like the future to be like?",
      "What was your favorite book as a child?",
      "What do you think of buffets?",
      "What are you going to do this weekend?",
      "What book has influenced you the most?",
      "Whats the worst fast food restaurant?",
      "What is the best restaurant in your area?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "You have to relive one day of your life forever. Which day do you choose?",
      "When was the last time you went to a movie theater?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "What are your goals for the next two years?",
      "If you could call up anyone in the world and have a one hour conversation, who would you call?",
      "Does having a day off for a holiday increase or decrease productivity at work?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "What apps have changed your life a lot?",
      "What is something that is popular now that annoys you?",
      "Where and when was the most amazing sunset you have ever seen?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "How do you plan to make the world a better place?",
      "What do you fear is hiding in the dark?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "If you opened a business, what kind of business would it be?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "What do you bring with you everywhere you go?",
      "What is your favorite shirt?",
      "Whats the best show currently on TV?",
      "Do you think <u data-word='Fellas' data-meaning='A group of people, usually male' data-sentence='Hey fellas, could you give me a hand putting this tinny in the drink..' class='slang' ion-text color='primary'>fellas <span class='help'>?</span></u> read more or less books now than 50 years ago?",
      "What is the biggest holiday for your family?",
      "What was the best birthday wish or gift youve ever received?",
      "Is it better to live where there are four seasons or where one season takes up most of the year?",
      "How has the education you received changed your life?",
      "Whats your favorite way to waste time?",
      "If you could have any animal as a pet, what animal would you choose?",
      "Did your family take seasonal vacations?",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Hey <u data-word='Egghead' data-meaning='A bald person' data-sentence='Hey egghead, its your shout!' class='slang' ion-text color='primary'>egghead <span class='help'>?</span></u>, its your shout!",
      "Where is the best place to take a date?",
      "What do you think of online education?",
      "What will phones be like in 10 years?",
      "Whats the most useful thing you own?",
      "How fast do you read?",
      "Another fun thing you can do is talk about holiday related trivia and facts. Here are some Christmas trivia questions, Halloween trivia questions, and some Thanksgiving trivia questions.",
      "Do you like classical music?",
      "What book genres do you like to read?",
      "What holidays have been over commercialized?",
      "What is your favorite piece of technology that you own?",
      "What book has had the biggest effect on the modern world?",
      "What is a controversial opinion you have?",
      "Who, besides your parents, had the biggest impact on your life?",
      "What kind of interior do you like a restaurant to have?",
      "Which app seemed like magic the first time you used it?",
      "Are you a very organized person?",
      "How often do you stay up past 3 a.m.?",
      "What is the most embarrassing piece of clothing you own?",
      "How much do you plan for the future?",
      "Whats the worst movie you have seen recently?",
      "Are there any songs that always bring a tear to your eye?",
      "Was there ever an event in your life that defied explanation?",
      "What is the most overrated movie?",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Nice talking to you <u data-word='Slater' data-meaning='See you later' data-sentence='Person 1 gonna go home now. person 2 slater. person 1 slater' class='slang' ion-text color='primary'>slater <span class='help'>?</span></u>",
      "Do you prefer to go off the beaten path when you travel?",
      "What trends did you follow when you were <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Ankle Biter <span class='help'>?</span></u>?",
      "Whats the best way to discover new music?",
      "What is your favorite food?",
      "If you were a king / queen, what would your throne look like?",
      "Where is the most awe inspiring place you have been?",
      "Which recent news story is the most interesting?",
      "How often do you check your phone?",
      "Have your parents influenced what goals you have?",
      "What are some strange beliefs that some people have?",
      "Whats the most addictive mobile game you have played?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "Why do you think sports are common across almost <u data-word='Ankle Biter' data-meaning='A young child' data-sentence='Heaps of ankle biters in that park' class='slang' ion-text color='primary'>Whole shabang <span class='help'>?</span></u> cultures present and past?",
      "An app mysteriously appears on your phone that does something amazing. What does it do?",
      "Now that indie publishing has become easier, have books gotten better or worse?",
      "If you could bring back one TV show that was cancelled, which one would you bring back?",
      "What piece of technology is really frustrating to use?",
      "Who in your life brings you the most joy?",
      "What is the best way to stay motivated and complete goals?",
      "How often do you binge watch shows?",
      "What sports do you like to watch?",
      "Has anyone ever saved your life?",
      "You find a remote that can rewind, fast forward, stop and start time. What do you do with it?",
      "What do you think of tour group packages?",
      "Whats the best sitcom past or present?",
      "Where is the nicest place you have been to in fall?",
      "What is the most disgusting habit some people have?",
      "What is the most comfortable piece of clothing you own?",
      "Who had the biggest impact on the person you have become?",
      "How many apps do you have on your phone?",
      "What food do you know you shouldnt eat but cant help yourself?",
      "What book has had the biggest impact on your life?",
      "Where do you spend most of your free time / day?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are some goals you have already <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What are you best at?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "What is the craziest, most outrageous thing you want to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u>?",
      "Would you eat at a restaurant that was really dirty if the food was amazing?",
      "A portal to another world opens in front of you. You dont know how long it will stay open or if youll be able to get back after you go through. What do you do?",
      "What is the silliest fear you have?",
      "What smell brings back great memories?",
      "Where do you get your recommendations for what to do and where to stay when you travel?",
      "Which season are you most active in?",
      "What is your favorite holiday?",
      "Which sports do you like to play?",
      "What is the fanciest restaurant you have eaten at?",
      "What is something that really annoys you but doesnt bother most people?",
      "Where did you go last weekend?, What did you do?",
      "Which emerging technology are you most excited about?",
      "What song always puts you in a good mood?",
      "What problems will technology solve in the next 5 years?, What problems will it create?",
      "Do you prefer summer or winter activities?",
      "If you had to change your name, what would your new name be?",
      "Whats the funniest TV series you have seen?",
      "Do you like horror movies, Why or why not?",
      "What would you want your last meal to be if you were on death row?",
      "Do you prefer to watch movies in the theater or in the comfort of your own home?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "What do you hope to <u data-word='Have a crack' data-meaning='try to achieve' data-sentence='Go on, have a crack at the high jump!' class='slang' ion-text color='primary'>have a crack <span class='help'>?</span></u> in your professional life?",
      "Who would be the worst person to be stuck in an elevator with?, How about the best person to be stuck in an elevator with?",
      "Who was the first band or musician you were really into?, Do you still like them?",
      "What was the last time you worked incredibly hard?",
      "How has technology changed the music industry?",
      "What was the last book you read?",
      "How much time do you spend on the internet? What do you usually do?",
      "What is the best room in your house?, Why?",
      "Does technology simplify life or make it more complicated?",
      "Do you like going to concerts, Why or why not, What was the last concert you went to?",
      "If you could make a holiday, what would it be like, What traditions would it have, What would people eat on your holiday?",
      "If you didnt care at all what people thought of you, what clothes would you wear?",
      "Can you think of any technology that has only made the world worse? How about a piece of technology that has only made the world better?",
      "What kinds of food do you usually eat on your favorite holiday?"
    ];

    return this.random_item(convo);
  }

  random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
  }

}
