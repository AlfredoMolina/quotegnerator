const arrayOfQuotes = [

{'author': 'Epictetus',
'quote': 'First say to yourself what you would be; and then do what you have to do' },

{'author': 'Diogenes',
'quote': ' The foundation of every state is the education of its youth' },

{'author': 'Socrates',
'quote': 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us' },

{'author': 'Heraclitus',
'quote': 'There is nothing permanent except change' },

{'author': 'Phythagoras',
'quote': 'Silence is better than unmeaning words' },

{'author': 'Epictetus',
'quote': ' It’s not what happens to you, but how you react to it that matters' },
]

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[random].author}`;
    
}