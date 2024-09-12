export const game = {
    letters: [],
    word: "",
    error: false,
    streak: 0,
    newGame: function() {
        this.letters = [];
        
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
        this.letters = new Array(3).fill().map(function(letter){ 
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIndex];
        });

        this.word = "";
        this.error = false;
    },
    validateword: function(word){
        for(var i = 0; i < this.letters.length; i++){
            if(word.includes(this.letters[i]) === false){
                this.error = true;
                return false
            }
        };   
        this.streak++
        return true; 
    }
}