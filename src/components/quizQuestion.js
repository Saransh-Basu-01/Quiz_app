const mangaQuestions = [
  {
    question: "Who is the creator of the manga 'Bleach'?",
    correct_answer: "Tite Kubo",
    options: ["Tite Kubo", "Masashi Kishimoto", "Akira Toriyama", "Naoko Takeuchi", "Kentaro Miura"]
  },
  {
    question: "Which manga follows a pirate named Monkey D. Luffy?",
    correct_answer: "One Piece",
    options: ["One Piece", "Naruto", "Bleach", "Fairy Tail", "Black Clover"]
  },
  {
    question: "In 'Death Note', what is the Shinigami's name who drops the notebook?",
    correct_answer: "Ryuk",
    options: ["Ryuk", "Rem", "Light", "L", "Near"]
  },
  {
    question: "What is the main weapon used by Guts in 'Berserk'?",
    correct_answer: "Dragonslayer Sword",
    options: ["Dragonslayer Sword", "Katana", "Bow", "Axe", "Magic Wand"]
  },
  {
    question: "Which manga features alchemy as a major element?",
    correct_answer: "Fullmetal Alchemist",
    options: ["Fullmetal Alchemist", "Blue Exorcist", "D.Gray-man", "Black Clover", "Soul Eater"]
  },
  {
    question: "Who is the main protagonist of 'Tokyo Ghoul'?",
    correct_answer: "Ken Kaneki",
    options: ["Ken Kaneki", "Sasuke Uchiha", "Eren Yeager", "Shoto Todoroki", "Shinji Ikari"]
  },
  {
    question: "What is the name of the ninja village in 'Naruto'?",
    correct_answer: "Konoha",
    options: ["Konoha", "Suna", "Kiri", "Iwa", "Kumo"]
  },
  {
    question: "Which manga is known for its notebooks that can kill?",
    correct_answer: "Death Note",
    options: ["Death Note", "Another", "Parasyte", "Elfen Lied", "Ajin"]
  },
  {
    question: "In 'One Punch Man', who is the cyborg disciple of Saitama?",
    correct_answer: "Genos",
    options: ["Genos", "Garou", "King", "Bang", "Mumen Rider"]
  },
  {
    question: "Who wrote the manga 'Dragon Ball'?",
    correct_answer: "Akira Toriyama",
    options: ["Akira Toriyama", "Yoshihiro Togashi", "Takeshi Obata", "Tite Kubo", "Rumiko Takahashi"]
  },
  {
    question: "Which manga features a world where giants eat humans?",
    correct_answer: "Attack on Titan",
    options: ["Attack on Titan", "Claymore", "Goblin Slayer", "Vinland Saga", "Hellsing"]
  },
  {
    question: "What is the name of the hero school in 'My Hero Academia'?",
    correct_answer: "U.A. High School",
    options: ["U.A. High School", "Shiketsu High", "Hero Academy", "Tokyo Hero School", "Z High"]
  },
  {
    question: "Which character is known for saying 'I am gonna be the Pirate King'?",
    correct_answer: "Monkey D. Luffy",
    options: ["Monkey D. Luffy", "Zoro", "Ace", "Shanks", "Law"]
  },
  {
    question: "In 'Demon Slayer', what is Tanjiro's sister's name?",
    correct_answer: "Nezuko",
    options: ["Nezuko", "Mitsuri", "Shinobu", "Kanae", "Kanao"]
  },
  {
    question: "What is the main goal of the Elric brothers in 'Fullmetal Alchemist'?",
    correct_answer: "Recover their bodies",
    options: ["Recover their bodies", "Defeat Father", "Join the military", "Find Philosopher’s Stone", "Rescue Winry"]
  },
  {
    question: "Who is the captain of the Black Bulls in 'Black Clover'?",
    correct_answer: "Yami Sukehiro",
    options: ["Yami Sukehiro", "Asta", "Julius Novachrono", "Fuegoleon", "Nozel Silva"]
  },
  {
    question: "Which manga features a deadly survival game involving cell phones?",
    correct_answer: "Future Diary",
    options: ["Future Diary", "Darwin’s Game", "Death Parade", "Deadman Wonderland", "Btooom!"]
  },
  {
    question: "In 'Hunter x Hunter', what is Gon Freecss searching for?",
    correct_answer: "His father",
    options: ["His father", "A lost treasure", "A legendary creature", "His master", "His aura core"]
  },
  {
    question: "What ability does Lelouch gain in 'Code Geass'?",
    correct_answer: "Geass (Power of Absolute Obedience)",
    options: ["Geass", "Sharingan", "Hamon", "Nen", "Quirk"]
  },
  {
    question: "Who is the 'Symbol of Peace' in 'My Hero Academia'?",
    correct_answer: "All Might",
    options: ["All Might", "Endeavor", "Aizawa", "Deku", "Bakugo"]
  },
  {
    question: "Which manga is about a volleyball team?",
    correct_answer: "Haikyuu!!",
    options: ["Haikyuu!!", "Kuroko no Basket", "Blue Lock", "Ace of Diamond", "Yuri on Ice"]
  },
  {
    question: "In 'JoJo's Bizarre Adventure', what are 'Stands'?",
    correct_answer: "Spiritual manifestations with powers",
    options: ["Spiritual manifestations", "Weapons", "Curses", "Demons", "Fusions"]
  },
  {
    question: "What does Asta from 'Black Clover' lack?",
    correct_answer: "Magic power",
    options: ["Magic power", "Strength", "Speed", "Mana control", "Family"]
  },
  {
    question: "Who is the main character in 'Chainsaw Man'?",
    correct_answer: "Denji",
    options: ["Denji", "Aki", "Power", "Kishibe", "Makima"]
  },
  {
    question: "What is Light Yagami's alias in 'Death Note'?",
    correct_answer: "Kira",
    options: ["Kira", "L", "X", "Raito", "Zero"]
  },
  {
    question: "Which manga is based on shogi?",
    correct_answer: "March Comes in Like a Lion",
    options: ["March Comes in Like a Lion", "Chihayafuru", "Hikaru no Go", "Your Lie in April", "Nana"]
  },
  {
    question: "What is the cursed object Yuji Itadori swallows in 'Jujutsu Kaisen'?",
    correct_answer: "Sukuna’s Finger",
    options: ["Sukuna’s Finger", "Cursed Orb", "Jade Eye", "Dark Ring", "Haunted Stone"]
  },
  {
    question: "In 'Blue Lock', what is the goal of the training program?",
    correct_answer: "To create the best striker",
    options: ["To create the best striker", "To find new defenders", "To build a national team", "To train goalkeepers", "To scout talent"]
  },
  {
    question: "Which manga features a protagonist named Eren Yeager?",
    correct_answer: "Attack on Titan",
    options: ["Attack on Titan", "Vinland Saga", "Claymore", "Berserk", "Dororo"]
  },
  {
    question: "What is the signature technique of Goku?",
    correct_answer: "Kamehameha",
    options: ["Kamehameha", "Rasengan", "Final Flash", "Bankai", "Detroit Smash"]
  },
  {
    question: "Who is the creator of 'Hunter x Hunter'?",
    correct_answer: "Yoshihiro Togashi",
    options: ["Yoshihiro Togashi", "Akira Toriyama", "Tite Kubo", "Hajime Isayama", "Naoko Takeuchi"]
  },
  {
    question: "In 'Spy x Family', what is Anya's secret ability?",
    correct_answer: "Telepathy",
    options: ["Telepathy", "Invisibility", "Super strength", "Time travel", "Flight"]
  },
  {
    question: "Which manga is about gods playing a deadly game with humans?",
    correct_answer: "Record of Ragnarok",
    options: ["Record of Ragnarok", "Death Note", "Future Diary", "Platinum End", "Noragami"]
  },
  {
    question: "What is the real identity of Zero in 'Code Geass'?",
    correct_answer: "Lelouch Lamperouge",
    options: ["Lelouch Lamperouge", "Suzaku Kururugi", "Clovis", "Charles", "C.C."]
  },
  {
    question: "What is the name of the guild in 'Fairy Tail'?",
    correct_answer: "Fairy Tail",
    options: ["Fairy Tail", "Phantom Lord", "Blue Pegasus", "Lamia Scale", "Sabertooth"]
  },
  {
    question: "What’s the name of the game Kirito plays in 'SAO'?",
    correct_answer: "Sword Art Online",
    options: ["Sword Art Online", "ALO", "GGO", "SAO II", "Elucidator"]
  },
  {
    question: "Who is known as the Ice Queen in 'Fairy Tail'?",
    correct_answer: "Gray Fullbuster",
    options: ["Gray Fullbuster", "Erza Scarlet", "Juvia Lockser", "Lucy Heartfilia", "Mira Jane"]
  },
  {
    question: "Which manga features music and classical performance?",
    correct_answer: "Your Lie in April",
    options: ["Your Lie in April", "Beck", "Given", "Nana", "Blue Period"]
  },
  {
    question: "What is the job of Loid Forger in 'Spy x Family'?",
    correct_answer: "Spy",
    options: ["Spy", "Assassin", "Butler", "Politician", "Teacher"]
  },
  {
    question: "Who is the main rival of Naruto?",
    correct_answer: "Sasuke Uchiha",
    options: ["Sasuke Uchiha", "Kakashi", "Shikamaru", "Gaara", "Neji"]
  },
  {
    question: "In 'Mob Psycho 100', what is Mob's real name?",
    correct_answer: "Shigeo Kageyama",
    options: ["Shigeo Kageyama", "Ritsu Kageyama", "Reigen Arataka", "Tome Kurata", "Teruki Hanazawa"]
  },
  {
    question: "Which manga is centered around culinary battles?",
    correct_answer: "Food Wars!",
    options: ["Food Wars!", "Toriko", "Yakitate!! Japan", "Shokugeki Chronicles", "Bento Battle"]
  },
  {
    question: "Which manga involves building a civilization from scratch?",
    correct_answer: "Dr. Stone",
    options: ["Dr. Stone", "Vinland Saga", "Golden Kamuy", "Steins;Gate", "Planetes"]
  },
  {
    question: "Who is the red-haired Yonko in 'One Piece'?",
    correct_answer: "Shanks",
    options: ["Shanks", "Kaido", "Big Mom", "Whitebeard", "Blackbeard"]
  },
  {
    question: "What is the main theme of 'Erased'?",
    correct_answer: "Time travel to prevent murder",
    options: ["Time travel", "Zombie outbreak", "Virtual reality", "Demonic possession", "School romance"]
  },
  {
    question: "What is Killua's family profession in 'Hunter x Hunter'?",
    correct_answer: "Assassins",
    options: ["Assassins", "Hunters", "Warriors", "Thieves", "Doctors"]
  },
  {
    question: "Which manga is set in feudal Japan with a samurai protagonist?",
    correct_answer: "Rurouni Kenshin",
    options: ["Rurouni Kenshin", "Inuyasha", "Dororo", "Samurai Deeper Kyo", "Afro Samurai"]
  },
  {
    question: "What is the device used in 'Bakuman' for making manga?",
    correct_answer: "Manuscript",
    options: ["Manuscript", "Panel Cutter", "Inker", "Draft Pen", "Storyboard"]
  }
];

export default mangaQuestions;
