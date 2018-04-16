(function(){
    function Question(question, answer , correct){
        this.question = question;
        this. answer = answer;
        this. correct = correct;
    }
    
    Question.prototype.displayQuestion =function(){
        console.log(this.question);
        
        for(var i = 0; i < this.answer.length; i++){
            console.log(i+':'+ this.answer[i]);
        }
    
    }
    Question.prototype.checkAnswer = function(ans){
       var score;
        score=0;
        if(ans === this.correct){
            score+=1
            console.log('jawaban benar!.skor anda adalah:'+score );
        }
        else{
            console.log('SALAH. coba lagi :)')
    
}
     }
    
    
    var q1 = new Question('apakah Java script bahasa pemrograman paling keren sedunia?',
                         
                         ['Ya','Enggak'],0);
    var q2 = new Question(' Siapa nama dosen yang mengajar kuliah ini?',
                         
                         ['john','michael','oskar'],2);
    var q3 = new Question('kata yang paling bagus untuk mendeskripsikan koding',
                         
                         ['bosen','susah','membahagiakan','membosankan'],2);
    var questions = [q1,q2,q3];
    A:
    for(;;){
    var n = Math.floor(Math.random() * questions.length );
    questions[n].displayQuestion();
    var answer = parseInt(prompt('pilih jawaban yang benar.'));
    questions[n].checkAnswer(answer);    
    if (answer == 'exit'){
        break A;
    }
     questions[n].checkAnswer(answer);
    }
})();