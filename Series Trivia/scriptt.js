let currentQuestion = 0;
let score = 0;
let selectedSeries = 'all';
let questions = [];
let userName = '';
let userEmail = '';

const seriesData = {
    'Game of Thrones': {
        poster: 'thumb-1920-307471.jpg',
        questions: [
            {
                question: 'Who is the first character to be crowned King of the Seven Kingdoms?',
                answers: ['Robert Baratheon', 'Renly Baratheon', 'Joffrey Baratheon', 'Stannis Baratheon'],
                correct: 0 // Correct answer is "Robert Baratheon"
            },
            {
                question: 'Which house’s motto is "Winter is Coming"?',
                answers: ['House Stark', 'House Lannister', 'House Baratheon', 'House Targaryen'],
                correct: 0 // Correct answer is "House Stark"
            },
            {
                question: 'Who was known as "The Kingslayer"?',
                answers: ['Jaime Lannister', 'Joffrey Baratheon', 'Robb Stark', 'Stannis Baratheon'],
                correct: 0 // Correct answer is "Jaime Lannister"
            },
            {
                question: 'What is the name of Jon Snow’s direwolf?',
                answers: ['Shaggydog', 'Ghost', 'Summer', 'Grey Wind'],
                correct: 1 // Correct answer is "Ghost"
            },
            {
                question: 'Who is the youngest Stark child?',
                answers: ['Arya Stark', 'Bran Stark', 'Sansa Stark', 'Rickon Stark'],
                correct: 3 // Correct answer is "Rickon Stark"
            },
            {
                question: 'What is Daenerys Targaryen’s birth name?',
                answers: ['Daenerys Stormborn', 'Daenerys of House Targaryen', 'Aerys Targaryen', 'Dany Stormborn'],
                correct: 0 // Correct answer is "Daenerys Stormborn"
            },
            {
                question: 'Which character is known for saying "Valar Morghulis"?',
                answers: ['Arya Stark', 'Jaqen H’ghar', 'Tyrion Lannister', 'Cersei Lannister'],
                correct: 1 // Correct answer is "Jaqen H’ghar"
            },
            {
                question: 'Who kills the Night King?',
                answers: ['Jon Snow', 'Daenerys Targaryen', 'Sansa Stark', 'Arya Stark'],
                correct: 3 // Correct answer is "Arya Stark"
            },
            {
                question: 'Which character is the "Mother of Dragons"?',
                answers: ['Cersei Lannister', 'Sansa Stark', 'Daenerys Targaryen', 'Melisandre'],
                correct: 2 // Correct answer is "Daenerys Targaryen"
            },
            {
                question: 'Who was the first ruler of the Iron Throne?',
                answers: ['Robert Baratheon', 'Joffrey Baratheon', 'Viserys Targaryen', 'Aegon I Targaryen'],
                correct: 3 // Correct answer is "Aegon I Targaryen"
            },
            {
                question: 'Who is the first character to be crowned King of the Seven Kingdoms?',
                answers: ['Joffrey Baratheon', 'Robert Baratheon', 'Renly Baratheon', 'Stannis Baratheon'],
                correct: 1 // Correct answer is "Robert Baratheon"
            },
            {
                question: 'Which house’s motto is "Winter is Coming"?',
                answers: ['House Stark', 'House Lannister', 'House Targaryen', 'House Baratheon'],
                correct: 0 // Correct answer is "House Stark"
            },
            {
                question: 'Who was known as "The Kingslayer"?',
                answers: ['Jaime Lannister', 'Robb Stark', 'Stannis Baratheon', 'Joffrey Baratheon'],
                correct: 0 // Correct answer is "Jaime Lannister"
            },
            {
                question: 'What is the name of Jon Snow’s direwolf?',
                answers: ['Ghost', 'Summer', 'Grey Wind', 'Shaggydog'],
                correct: 0 // Correct answer is "Ghost"
            },
            {
                question: 'Who is the youngest Stark child?',
                answers: ['Arya Stark', 'Bran Stark', 'Rickon Stark', 'Sansa Stark'],
                correct: 2 // Correct answer is "Rickon Stark"
            },
            {
                question: 'What is Daenerys Targaryen’s birth name?',
                answers: ['Daenerys Stormborn', 'Aerys Targaryen', 'Daenerys of House Targaryen', 'Dany Stormborn'],
                correct: 0 // Correct answer is "Daenerys Stormborn"
            },
            {
                question: 'Which character is known for saying "Valar Morghulis"?',
                answers: ['Arya Stark', 'Tyrion Lannister', 'Jaqen H’ghar', 'Cersei Lannister'],
                correct: 2 // Correct answer is "Jaqen H’ghar"
            },
            {
                question: 'Who kills the Night King?',
                answers: ['Jon Snow', 'Arya Stark', 'Daenerys Targaryen', 'Sansa Stark'],
                correct: 1 // Correct answer is "Arya Stark"
            },
            {
                question: 'Which character is the "Mother of Dragons"?',
                answers: ['Sansa Stark', 'Cersei Lannister', 'Daenerys Targaryen', 'Melisandre'],
                correct: 2 // Correct answer is "Daenerys Targaryen"
            },
            {
                question: 'Who was the first ruler of the Iron Throne?',
                answers: ['Aegon I Targaryen', 'Robert Baratheon', 'Joffrey Baratheon', 'Viserys Targaryen'],
                correct: 0 // Correct answer is "Aegon I Targaryen"
            }
            
            
            
    
        ]
    },
    'Stranger things': {
        poster: 'hawkins-stranger-things-dxaviuaj5tmp5snh.jpg',
        questions: [
            {
                question: 'What is the name of the town where Stranger Things is set?',
                answers: ['Hawkins', 'Radford', 'Springfield', 'Derry'],
                correct: 0 // Correct answer is "Hawkins"
            },
            {
                question: 'Who is the main antagonist in season 1?',
                answers: ['The Mind Flayer', 'The Demogorgon', 'Vecna', 'The Flayed'],
                correct: 2 // Correct answer is "The Demogorgon"
            },
            {
                question: 'What is Eleven’s real name?',
                answers: ['Jane Ives', 'Eleonora Sinclair', 'Tina Hawkins', 'Sarah Wheeler'],
                correct: 1 // Correct answer is "Jane Ives"
            },
            {
                question: 'Which character says, "Mornings are for coffee and contemplation"?',
                answers: ['Mike Wheeler', 'Jim Hopper', 'Dustin Henderson', 'Lucas Sinclair'],
                correct: 3 // Correct answer is "Jim Hopper"
            },
            {
                question: 'What year does Stranger Things season 1 take place?',
                answers: ['1984', '1983', '1985', '1986'],
                correct: 2 // Correct answer is "1984"
            },
            {
                question: 'Who is the first character to encounter the Demogorgon?',
                answers: ['Will Byers', 'Jim Hopper', 'Jonathan Byers', 'Dustin Henderson'],
                correct: 3 // Correct answer is "Will Byers"
            },
            {
                question: 'What is the name of Eleven’s mother?',
                answers: ['Terry Ives', 'Jane Ives', 'Karen Wheeler', 'Nancy Wheeler'],
                correct: 0 // Correct answer is "Terry Ives"
            },
            {
                question: 'Which character is known for their love of Eggo waffles?',
                answers: ['Will Byers', 'Lucas Sinclair', 'Mike Wheeler', 'Eleven'],
                correct: 2 // Correct answer is "Eleven"
            },
            {
                question: 'Who is the leader of the group of kids in Stranger Things?',
                answers: ['Mike Wheeler', 'Lucas Sinclair', 'Dustin Henderson', 'Will Byers'],
                correct: 1 // Correct answer is "Mike Wheeler"
            },
            {
                question: 'Who is the first character to be trapped in the Upside Down?',
                answers: ['Will Byers', 'Jonathan Byers', 'Mike Wheeler', 'Jim Hopper'],
                correct: 3 // Correct answer is "Will Byers"
            },
            {
                question: 'What is the name of the creature that attacks the kids in season 2?',
                answers: ['The Demogorgon', 'The Mind Flayer', 'The Flayed', 'The Shadow Monster'],
                correct: 2 // Correct answer is "The Mind Flayer"
            },
            {
                question: 'What is the name of Dustin’s pet that is revealed to be a Demogorgon?',
                answers: ['Mews', 'Dart', 'Stripes', 'Maggie'],
                correct: 3 // Correct answer is "Dart"
            },
            {
                question: 'Which character becomes the new "Hawkins Chief of Police"?',
                answers: ['Jim Hopper', 'Steve Harrington', 'Jonathan Byers', 'Mike Wheeler'],
                correct: 0 // Correct answer is "Jim Hopper"
            },
            {
                question: 'Who does Nancy Wheeler date in season 1?',
                answers: ['Will Byers', 'Jonathan Byers', 'Mike Wheeler', 'Steve Harrington'],
                correct: 1 // Correct answer is "Jonathan Byers"
            },
            {
                question: 'What is the name of the arcade where the kids hang out?',
                answers: ['The Popcorn Stand', 'The Upside Down Arcade', 'Starcourt Mall', 'The Palace Arcade'],
                correct: 2 // Correct answer is "The Palace Arcade"
            },
            {
                question: 'Who does Eleven use her telekinetic powers to save during a fight with a bully?',
                answers: ['Mike Wheeler', 'Dustin Henderson', 'Lucas Sinclair', 'Nancy Wheeler'],
                correct: 1 // Correct answer is "Mike Wheeler"
            }
,            
            {
                question: 'What is the name of the parallel dimension in Stranger Things?',
                answers: ['The Shadow Realm', 'The Upside Down', 'The Dark Zone', 'The Netherworld'],
                correct: 0 // Correct answer is "The Upside Down"
            },
            {
                question: 'Which character is known for the catchphrase "She’s our friend and she’s crazy!"?',
                answers: ['Dustin Henderson', 'Mike Wheeler', 'Steve Harrington', 'Lucas Sinclair'],
                correct: 1 // Correct answer is "Steve Harrington"
            },
            {
                question: 'Who was the main antagonist in season 2?',
                answers: ['The Mind Flayer', 'The Demogorgon', 'The Flayed', 'The Upside Down'],
                correct: 2 // Correct answer is "The Mind Flayer"
            },
            {
                question: 'What is Dustin’s pet’s name?',
                answers: ['Mews', 'Dart', 'Sandy', 'Stripes'],
                correct: 2 // Correct answer is "Dart"
            }
            
            
    
]

    },
    'Dark': {
        poster: 'wp5380453.png',
        questions: [
            {
                question: 'Who is the first person to disappear in the show?',
                answers: ['Mikkel Nielsen', 'Jonas Kahnwald', 'Erik Obendorf', 'Ulrike Doppler'],
                correct: 2 // Correct answer is "Mikkel Nielsen"
            },
            {
                question: 'What is the name of the time travel portal in the show?',
                answers: ['The Tunnel', 'The Time Rift', 'The Winden Caves', 'The Wormhole'],
                correct: 3 // Correct answer is "The Winden Caves"
            },
            {
                question: 'Who is the main antagonist in *Dark*?',
                answers: ['Jonas Kahnwald', 'Claudia Tiedemann', 'Noah', 'The Stranger'],
                correct: 1 // Correct answer is "Jonas Kahnwald"
            },
            {
                question: 'Which character is revealed to be from the future?',
                answers: ['Ulrike Doppler', 'Jonas Kahnwald', 'Mikkel Nielsen', 'Claudia Tiedemann'],
                correct: 0 // Correct answer is "Jonas Kahnwald"
            },
            {
                question: 'In which year does the show begin?',
                answers: ['1953', '2019', '1986', '2020'],
                correct: 3 // Correct answer is "2019"
            },
            {
                question: 'Who kills Martha Nielsen in the alternate world?',
                answers: ['Jonas Kahnwald', 'The Stranger', 'Noah', 'Claudius Doppler'],
                correct: 3 // Correct answer is "Jonas Kahnwald"
            },
            {
                question: 'What is the name of the machine that enables time travel?',
                answers: ['The God Particle', 'The Time Machine', 'The Quantum Tunnel', 'The Higgs Collider'],
                correct: 0 // Correct answer is "The God Particle"
            },
            {
                question: 'Which character is the father of Martha Nielsen?',
                answers: ['Michael Kahnwald', 'Ulrich Doppler', 'Hannah Kahnwald', 'Claudia Tiedemann'],
                correct: 1 // Correct answer is "Michael Kahnwald"
            },
            {
                question: 'Who is known for saying "The end is the beginning, and the beginning is the end"?',
                answers: ['Noah', 'The Stranger', 'Claudia Tiedemann', 'Martha Nielsen'],
                correct: 3 // Correct answer is "The Stranger"
            },
            {
                question: 'What is the main theme of the show?',
                answers: ['Time travel and fate', 'The afterlife', 'Alternate dimensions', 'Mind control'],
                correct: 0 // Correct answer is "Time travel and fate"
            }
            
            
]
    },
    'Alice in Borderland': {
    poster: 'alice-in-borderland-background-1pr8p67qk6tnr29f.jpg', // Add an appropriate poster URL
    questions:[
        {
            question: 'What is the name of the protagonist in Alice in Borderland?',
            answers: ['Usagi', 'Chishiya', 'Arisu', 'Kuina'],
            correct: 2 // Correct answer is "Arisu"
        },
        {
            question: 'What type of game is represented by the "Spades" suit in Alice in Borderland?',
            answers: ['Luck', 'Physical', 'Teamwork', 'Intelligence'],
            correct: 1 // Correct answer is "Physical"
        },
        {
            question: 'What is the name of the town in *Dark*?',
            answers: ['Winden', 'Hawkins', 'Berlin', 'Munich'],
            correct: 0 // Correct answer is "Winden"
        },
        {
            question: 'Which character is known for their strong connection to time travel?',
            answers: ['Jonas Kahnwald', 'Claudia Tiedemann', 'Ulrike Doppler', 'Hannah Kahnwald'],
            correct: 2 // Correct answer is "Jonas Kahnwald"
        },
        {
            question: 'What is the name of the mysterious priest in the show?',
            answers: ['Noah', 'Adam', 'The Stranger', 'H.G. Tannhaus'],
            correct: 1 // Correct answer is "Noah"
        },
        {
            question: 'Which character goes missing and sparks the events of the show?',
            answers: ['Mikkel Nielsen', 'Jonas Kahnwald', 'Erik Obendorf', 'Ulrich Doppler'],
            correct: 3 // Correct answer is "Mikkel Nielsen"
        },
        {
            question: 'Who is responsible for the creation of the time machine in *Dark*?',
            answers: ['Jonas Kahnwald', 'H.G. Tannhaus', 'Claudia Tiedemann', 'Michael Kahnwald'],
            correct: 1 // Correct answer is "H.G. Tannhaus"
        },
        {
            question: 'Which character ends up being a version of "The Stranger"?',
            answers: ['Jonas Kahnwald', 'Ulrike Doppler', 'Claudia Tiedemann', 'Peter Doppler'],
            correct: 0 // Correct answer is "Jonas Kahnwald"
        },
        {
            question: 'What is the name of the group trying to prevent the apocalypse?',
            answers: ['The Sic Mundus', 'The Time Keepers', 'The Secret Circle', 'The Doomsday Group'],
            correct: 1 // Correct answer is "The Sic Mundus"
        },
        {
            question: 'Which event is central to the show, occurring in 1986?',
            answers: ['The Chernobyl Disaster', 'The Winden Explosion', 'The Time Rift Activation', 'The Black Hole Incident'],
            correct: 0 // Correct answer is "The Chernobyl Disaster"
        },
        {
            question: 'Who is the first character to realize the existence of time travel?',
            answers: ['Jonas Kahnwald', 'Claudia Tiedemann', 'Michael Kahnwald', 'Hannah Kahnwald'],
            correct: 2 // Correct answer is "Claudia Tiedemann"
        },
        {
            question: 'What is the true identity of Adam?',
            answers: ['Jonas Kahnwald', 'Claudia Tiedemann', 'Noah', 'The Stranger'],
            correct: 0 // Correct answer is "Jonas Kahnwald"
        }
,        
        {
            question: 'Who is the game master in the Beach arc?',
            answers: ['Chishiya', 'Mira', 'Aguni', 'Hatter'],
            correct: 2 // Correct answer is "Aguni"
        },
        {
            question: 'What is Usagi’s profession before entering the Borderlands?',
            answers: ['Climber', 'Doctor', 'Photographer', 'Chef'],
            correct: 0 // Correct answer is "Climber"
        },
        {
            question: 'What does the "Hearts" suit represent in the games?',
            answers: ['Endurance', 'Strategy', 'Strength', 'Trust and betrayal'],
            correct: 3 // Correct answer is "Trust and betrayal"
        },
        {
            question: 'Which character is known for their calm and calculating nature?',
            answers: ['Aguni', 'Chishiya', 'Arisu', 'Tatta'],
            correct: 1 // Correct answer is "Chishiya"
        },
        {
            question: 'What is the ultimate goal of participants in the Borderlands?',
            answers: ['To survive until the games end', 'To collect all the suits of cards', 'To become a game master', 'To return to the real world'],
            correct: 1 // Correct answer is "To collect all the suits of cards"
        },
        {
            question: 'Which game involves a dangerous game of tag inside an apartment complex?',
            answers: ['7 of Clubs', '5 of Spades', '4 of Diamonds', 'King of Hearts'],
            correct: 1 // Correct answer is "5 of Spades"
        },
        {
            question: 'What is the shocking twist revealed about the Borderlands?',
            answers: ['It’s a purgatory between life and death', 'It’s a government experiment', 'It’s a virtual reality simulation', 'It’s a dream of one of the players'],
            correct: 0 // Correct answer is "It’s a purgatory between life and death"
        },
        {
            question: 'Who is the last King to be defeated in the Borderlands?',
            answers: ['King of Diamonds', 'King of Spades', 'King of Hearts', 'King of Clubs'],
            correct: 1 // Correct answer is "King of Spades"
        }
        
        

      
        
]

},
    'Panchayat': {
        poster: 'panch_39fDRRN.webp',
        questions: [
            {
                question: 'Who plays the character of Abhishek Tripathi in *Panchayat*?',
                answers: ['Jitendra Kumar', 'Neeraj Madhav', 'Chandan Roy', 'Raghubir Yadav'],
                correct: 0 // Correct answer is "Jitendra Kumar"
            },
            {
                question: 'Which actor plays the role of the Sarpanch’s wife, Manju Devi?',
                answers: ['Neena Gupta', 'Raghubir Yadav', 'Chandan Roy', 'Saanand Verma'],
                correct: 0 // Correct answer is "Neena Gupta"
            },
            {
                question: 'In which season of *Panchayat* does Abhishek Tripathi start to adjust to village life?',
                answers: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
                correct: 0 // Correct answer is "Season 1"
            },
            {
                question: 'What is the name of Abhishek Tripathi’s friend who works with him at the Panchayat?',
                answers: ['Vikas Shukla', 'Sundar', 'Chandan', 'Manoj'],
                correct: 1 // Correct answer is "Vikas Shukla"
            },
            {
                question: 'What is the main conflict faced by Abhishek Tripathi in the village?',
                answers: ['Dealing with local politics', 'Managing the panchayat office', 'Village development issues', 'Balancing personal life'],
                correct: 0 // Correct answer is "Dealing with local politics"
            },
            {
                question: 'Which of these characters is known for their comedic role in *Panchayat*?',
                answers: ['Sundar', 'Vikas Shukla', 'Abhishek Tripathi', 'Brij Bhushan Dubey'],
                correct: 3 // Correct answer is "Sundar"
            },
            {
                question: 'Which festival plays a significant role in one of the episodes of *Panchayat*?',
                answers: ['Diwali', 'Holi', 'Makar Sankranti', 'Eid'],
                correct: 1 // Correct answer is "Holi"
            },
            {
                question: 'What is the title of the second season of *Panchayat*?',
                answers: ['Panchayat 2: The Struggle Continues', 'Panchayat: Season 2', 'Panchayat: The Rural Challenge', 'Panchayat 2'],
                correct: 3 // Correct answer is "Panchayat 2"
            },
            {
                question: 'Who is the first person Abhishek Tripathi meets when he arrives in Phulera?',
                answers: ['Vikas Shukla', 'Sundar', 'Manju Devi', 'Brij Bhushan Dubey'],
                correct: 0 // Correct answer is "Sundar"
            },
            {
                question: 'What is the main reason Abhishek Tripathi takes the job in Phulera?',
                answers: ['To gain government experience', 'To prepare for CAT exams', 'To support his family', 'To enjoy rural life'],
                correct: 1 // Correct answer is "To prepare for CAT exams"
            },
            {
                question: 'What does Abhishek Tripathi struggle with most in the village?',
                answers: ['Lack of amenities', 'Language barrier', 'Interpersonal conflicts', 'Financial issues'],
                correct: 0 // Correct answer is "Lack of amenities"
            },
            {
                question: 'Who helps Abhishek the most in managing the Panchayat office?',
                answers: ['Vikas Shukla', 'Manju Devi', 'Sundar', 'Brij Bhushan Dubey'],
                correct: 0 // Correct answer is "Vikas Shukla"
            },
            {
                question: 'What gift does Abhishek receive from Manju Devi in Season 2?',
                answers: ['A new fan', 'A pressure cooker', 'A cycle', 'A television'],
                correct: 2 // Correct answer is "A pressure cooker"
            },
            {
                question: 'What nickname does the village use for the Panchayat office?',
                answers: ['Admin Center', 'Abhishek’s Palace', 'Gram Sabha', 'Chhota Secretariat'],
                correct: 3 // Correct answer is "Gram Sabha"
            },
            {
                question: 'Which problem does the Panchayat team solve related to electricity?',
                answers: ['Installing new poles', 'Repairing transformers', 'Setting up solar panels', 'Paying pending bills'],
                correct: 1 // Correct answer is "Repairing transformers"
            },
            {
                question: 'What motivates Manju Devi to take her responsibilities as Sarpanch seriously?',
                answers: ['Abhishek’s advice', 'A government inspection', 'Her daughter’s encouragement', 'A speech competition'],
                correct: 1 // Correct answer is "A government inspection"
            },
            {
                question: 'What does Abhishek do to escape boredom in the village?',
                answers: ['Plays video games', 'Learns cooking', 'Studies for CAT exams', 'Starts a garden'],
                correct: 2 // Correct answer is "Studies for CAT exams"
            },
            {
                question: 'What is the reaction of the villagers when Abhishek first arrives in Phulera?',
                answers: ['Curiosity', 'Hostility', 'Indifference', 'Excitement'],
                correct: 0 // Correct answer is "Curiosity"
            },
            {
                question: 'What issue does Abhishek face during his stay at the Panchayat office?',
                answers: ['Lack of privacy', 'No proper bathroom', 'Frequent power cuts', 'No access to clean water'],
                correct: 1 // Correct answer is "Frequent power cuts"
            }
,            
            {
                question: 'What is Abhishek Tripathi’s dream job?',
                answers: ['Joining a private company', 'Becoming a teacher', 'Working in a city government office', 'Pursuing a career in politics'],
                correct: 0 // Correct answer is "Joining a private company"
            }
            
        ]
    },
    
    'Money Hiest': {
        poster: 'thumb-1920-1072652.jpg',
        questions: [
            {
                question: 'What is the real name of The Professor in *Money Heist*?',
                answers: ['Sergio Marquina', 'Andrés de Fonollosa', 'Ángel Rubio', 'Raquel Murillo'],
                correct: 0 // Correct answer is "Sergio Marquina"
            },
            {
                question: 'What is the name of the mint where the first heist takes place?',
                answers: ['Royal Mint of Spain', 'Bank of Spain', 'Central Bank of Madrid', 'National Reserve Mint'],
                correct: 0 // Correct answer is "Royal Mint of Spain"
            },
            {
                question: 'Which city is NOT used as a code name by the robbers?',
                answers: ['Lisbon', 'Berlin', 'Sydney', 'Tokyo'],
                correct: 2 // Correct answer is "Sydney"
            },
            {
                question: 'What is the signature mask worn by the robbers?',
                answers: ['Dali mask', 'Clown mask', 'Anonymous mask', 'Skull mask'],
                correct: 0 // Correct answer is "Dali mask"
            },
            {
                question: 'Who is The Professor’s brother in *Money Heist*?',
                answers: ['Berlin', 'Tokyo', 'Rio', 'Palermo'],
                correct: 0 // Correct answer is "Berlin"
            },
            {
                question: 'What is the famous Italian protest song sung by the robbers?',
                answers: ['Bella Ciao', 'Volare', 'O Sole Mio', 'La Vita è Bella'],
                correct: 0 // Correct answer is "Bella Ciao"
            },
            {
                question: 'Which character falls in love with a hostage, Stockholm?',
                answers: ['Denver', 'Rio', 'Helsinki', 'Oslo'],
                correct: 0 // Correct answer is "Denver"
            },
            {
                question: 'What is Raquel Murillo’s code name after joining the heist team?',
                answers: ['Lisbon', 'Nairobi', 'Berlin', 'Moscow'],
                correct: 0 // Correct answer is "Lisbon"
            },
            {
                question: 'Which character is a skilled hacker in the team?',
                answers: ['Rio', 'Tokyo', 'Palermo', 'Berlin'],
                correct: 0 // Correct answer is "Rio"
            },
            {
                question: 'What is the primary objective of the second heist at the Bank of Spain?',
                answers: ['Stealing gold', 'Printing money', 'Freeing a hostage', 'Destroying documents'],
                correct: 0 // Correct answer is "Stealing gold"
            },
            {
                question: 'What is the name of the inspector who initially investigates the heist?',
                answers: ['Raquel Murillo', 'Alicia Sierra', 'Ángel Rubio', 'Colonel Prieto'],
                correct: 0 // Correct answer is "Raquel Murillo"
            },
            {
                question: 'Which character says the iconic line, "Let the matriarchy begin"?',
                answers: ['Nairobi', 'Tokyo', 'Lisbon', 'Stockholm'],
                correct: 0 // Correct answer is "Nairobi"
            },
            {
                question: 'Which team member sacrifices himself during the heist at the Bank of Spain?',
                answers: ['Nairobi', 'Berlin', 'Helsinki', 'Oslo'],
                correct: 1 // Correct answer is "Berlin"
            },
            {
                question: 'What illness is Berlin diagnosed with?',
                answers: ['Helmer’s Myopathy', 'Cancer', 'Parkinson’s Disease', 'ALS'],
                correct: 0 // Correct answer is "Helmer’s Myopathy"
            },
            {
                question: 'Who tortures Rio after his capture by the police?',
                answers: ['Alicia Sierra', 'Colonel Prieto', 'Raquel Murillo', 'Ángel Rubio'],
                correct: 0 // Correct answer is "Alicia Sierra"
            },
            {
                question: 'What is the name of the pregnant police officer in *Money Heist*?',
                answers: ['Alicia Sierra', 'Raquel Murillo', 'Ágata Jiménez', 'Sofía Ramos'],
                correct: 0 // Correct answer is "Alicia Sierra"
            },
            {
                question: 'Which country does The Professor and Raquel escape to after the first heist?',
                answers: ['Philippines', 'Thailand', 'Argentina', 'Portugal'],
                correct: 0 // Correct answer is "Philippines"
            },
            {
                question: 'Who is the first robber to die in the series?',
                answers: ['Oslo', 'Moscow', 'Nairobi', 'Berlin'],
                correct: 0 // Correct answer is "Oslo"
            },
            {
                question: 'What is the name of Arturo’s love interest during the heist?',
                answers: ['Mónica', 'Tokyo', 'Nairobi', 'Lisbon'],
                correct: 0 // Correct answer is "Mónica"
            },
            {
                question: 'What relationship does Denver have with Moscow?',
                answers: ['Son', 'Brother', 'Nephew', 'Friend'],
                correct: 0 // Correct answer is "Son"
            }
            
        ]
    },
    'all': {
        poster: '300953160_396742472542686_3689852252603582888_n.jpg',
        questions: []
    }
};

Object.keys(seriesData).forEach(series => {
    if (series !== 'all') {
        seriesData['all'].questions = seriesData['all'].questions.concat(seriesData[series].questions);
    }
});

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    userName = document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    startQuiz();
});

let backgroundSound = null;

function selectSeries() {
    selectedSeries = document.getElementById('series').value;
    const posterUrl = seriesData[selectedSeries].poster;

    // Update the background image based on the selected series
    if (posterUrl) {
        document.body.style.backgroundImage = `url(${posterUrl})`;
    } else {
        // If no series or "all" is selected, revert to the default Netflix background
        document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper (19) (1).jpg")';
    }

    // Play background sound based on selected series
    playBackgroundSound(selectedSeries);

    startQuiz();
}

function playBackgroundSound(series) {
    // Stop any previously playing background sound
    if (backgroundSound) {
        backgroundSound.pause();
        backgroundSound.currentTime = 0; // Reset to the beginning
    }

    // Define the path to the background sound based on the selected series
    let soundFile = '';
    switch (series) {
        case 'Game of Thrones':
            soundFile = 'Game_of_Thrones_S8_Official_Soundtrack_Main_Title_Ramin_Djawadi.mp3';
            break;
        case 'Stranger things':
            soundFile = '80s-mystical-stranger-things-133254.mp3';
            break;
        case 'Alice in Borderland':
            soundFile = 'Intro Netflix series 2020.mp3';
            break;
            case 'Dark':
            soundFile = 'Me and the Devil Dark S01E05.mp3';
            break;
            case 'Panchayat':
            soundFile = 'Panchayat Title.mp3';
            break;
            case 'Money Hiest':
            soundFile = 'Money Heist Soundtrack Theme Song.mp3';
            break;
        default:
            soundFile = ''; // No sound for "All" or default
    }

    // If there's a sound file for the selected series, play it
    if (soundFile) {
        backgroundSound = new Audio(soundFile);
        backgroundSound.loop = true;  // Loop the background sound
        backgroundSound.volume = 0.3; // Set the volume (adjust as needed)
        backgroundSound.play();
    }
}


// Shuffle and select 10 random questions from the series
function shuffleAndSelect(array, n) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    if (n > array.length) {
        throw new Error("Requested number of elements exceeds array length.");
    }
    let shuffled = array.slice();  // Create a copy to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];  // Swap elements
    }
    return shuffled.slice(0, n);  // Return the first 'n' shuffled elements
}


function startQuiz() {
    currentQuestion = 0;
    score = 0;
    let allQuestions = seriesData[selectedSeries].questions;
    questions = shuffleAndSelect(allQuestions, 10);  // Select 10 random questions
    document.getElementById('shareButton').style.display = 'none';  // Hide share button
    loadQuestion();
}


let countdown;  // To store the setInterval for the countdown

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('questionContainer').innerHTML = `<p>Quiz complete! Your score: ${score}/${questions.length}</p>`;
        clearInterval(countdown); // Clear the timer
        document.getElementById('shareButton').style.display = 'block'; // Show the share button
        document.getElementById('twitterShareButton').style.display = 'block'; // Show the Twitter share button
        document.getElementById('facebookShareButton').style.display = 'block'; // Show the Facebook share button
        document.getElementById('resetButton').style.display = 'block'; // Show the reset button
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('answers').innerHTML = '';

    q.answers.forEach((answer, index) => {
        let btn = document.createElement('button');
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, q.correct);
        document.getElementById('answers').appendChild(btn);
    });

    // Start the countdown for the current question
    startCountdown(15);  // Start countdown from 15 seconds (adjust as needed)
}


function startCountdown(seconds) {
    let timeLeft = seconds;
    const timerText = document.getElementById('timerText');
    const timerBar = document.getElementById('timerBar');

    // Set the timer text display
    timerText.textContent = `Time left: ${timeLeft}s`;

    // Set the timer bar to full width initially
    timerBar.style.width = '100%';

    // Clear any existing countdowns
    clearInterval(countdown);

    // Start a new countdown
    countdown = setInterval(() => {
        timeLeft--;
        
        // Update the timer text
        timerText.textContent = `Time left: ${timeLeft}s`;

        // Calculate the width of the timer bar
        let widthPercentage = (timeLeft / seconds) * 100;
        timerBar.style.width = `${widthPercentage}%`;

        // Check if time is up
        if (timeLeft <= 0) {
            clearInterval(countdown);
            currentQuestion++;  // Move to the next question when time is up
            loadQuestion();     // Load the next question
        }
    }, 1000);  // Update every second
}






function checkAnswer(selected, correct) {
    let buttons = document.querySelectorAll('#answers button');
    buttons.forEach((btn, index) => {
        if (index === correct) {
            btn.classList.add('correct');
            if (selected === correct) {
                score++;
                playSound('correct');
            }
        } else {
            if (selected === index) {
                btn.classList.add('wrong');
                playSound('wrong');
            }
        }
    });

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

function playSound(type) {
    let sound = new Audio(type === 'correct' ? 'correct-6033.mp3' : 'wrong-47985.mp3');
    sound.play();
}

// function sendEmail() {
//     let mailtoLink = `mailto:${userEmail}?subject=Quiz Score&body=Hi ${userName},%0D%0A%0D%0AYou scored ${score} in the quiz!`;
//     window.location.href = mailtoLink;
// }

function sendEmail() {
    let seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' $1'); // Format the series name
    let mailtoLink = `mailto:${userEmail},himanshukhare450@gmail.com?subject=Quiz Score for ${seriesName}&body=Hi ${userName},%0D%0A%0D%0AYou scored ${score} in the ${seriesName} quiz!`;
    window.location.href = mailtoLink;
}

function shareOnTwitter() {
    const seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' $1'); // Format series name
    const scoreMessage = `Hi, I scored ${score}/10 on @Series_trivia in the ${seriesName} category quiz! Can you beat me?`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(scoreMessage)}`;
    window.open(twitterUrl, '_blank');
}


 function shareOnFacebook() {
    const seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' $1'); // Format the series name
    const scoreMessage = `Hi, I scored ${score}/10 in the ${seriesName} category quiz on SeriesTrivia! Can you beat me?`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(scoreMessage)}`;
    window.open(facebookUrl, '_blank');
}




function skipQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('questionContainer').innerHTML = `<p>Quiz complete! Your score: ${score}/${questions.length}</p>`;
        document.getElementById('shareButton').style.display = 'block'; // Show the share button
    } else {
        loadQuestion();
    }
}
