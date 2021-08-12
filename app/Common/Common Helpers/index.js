export const dateFormatter = (date)=>{
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear();
    if(dd < 10) dd = '0' + dd
    if(mm < 10) mm = '0' + mm
    return dd + '-' + mm + '-' + yyyy;
}

const numerologyNumbers = [1,2,3,4,5,6,7,8,9,11,22]

export const sumOfDigits = (value) => {
    let sum = 0;
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    if(numerologyNumbers.includes(sum)) return sum;
    else return sumOfDigits(sum);
  }

export const LifePathBenefits = [
    {
        "Number": 1,
        "Benefits": "Number 1 people are the leaders, the ones who are in charge. You have a strong determination and a purpose in life which you move toward each day. You are very ambitious and want to succeed in life.You have a lot of energy and power, as well as a strong belief in yourself. You are generally positive and enthusiastic, with a lot of independence."
    },
    {
        "Number": 2,
        "Benefits": "Number 2 people are well-balanced, sociable, cheerful, and have a sensitivity and and inner genteelness. Your home, loved ones and family are very important to you. You need to be in harmonious surroundings to feel happiest. Your feelings are very sensitive and you can become easily hurt by others, which can lead to episodes of depression."
    },
    {
        "Number": 3,
        "Benefits": "Number 3 people are the adaptable, versatile and charming ones. You are very restless and need to be moving forward and changing direction every few years in your life. You have a variety of interests which you may pursue at some stage in your life. You are always good company in social situations, you love to socialize and are such a charming, witty and interesting companion. Your outward sunny and vibrant nature belies the worries and insecurities you have inside, which you don't really show and so most people don't get to see this side of you."
    },
    {
        "Number": 4,
        "Benefits": "Number 4 people are very hardworking, sensible, practical and need to feel stable to succeed in life. Once you have decided on a path in life, you tend to stick to it until you achieve it. You are very loyal and dedicated to your close friends, lovers and family. You always learn from your mistakes and order and logic appeal greatly to you. You are the best person in an emergency as you know exactly what to do and will go about it rational and calmly while others panic."
    },
    {
        "Number": 5,
        "Benefits": "Number 5 people are very creative and artistic. You have a great deal of energy and thirst for life and all you can experience. You are changeable and dislike routine of any sort as you need variety and excitement. You make friends very easily and often lend a sympathetic ear to your many friends - you have the most friends of all the Life Numbers."
    },
    {
        "Number": 6,
        "Benefits": "6 is the number of harmony and balance (as it is closely linked with Libra). Number 6 people are great at balancing all areas of your life - friends, family, work and your partner better than the other Life Numbers. You have an interest in health and especially nutrition and will always try your best to feed your family well although you may not take care of yourself as well. You are very attractive and magnetic to other people. You usually succeed in business, so your finances are healthy which allows you to indulge in your favorite luxury items."
    },
    {
        "Number": 7,
        "Benefits": "Number 7 people are the spiritual and intuitive ones. You are more often than not gifted with a psychic ability, which you should develop. You are a great mediator, you know exactly how to achieve peace between two warring parties. You are very sensitive, introspective and have a developed spirituality, irrespective of whether you follow a specific religion or not. You often have very vivid dreams which you almost always remember. You are an idealist and a thinker."
    },
    {
        "Number": 8,
        "Benefits": "Number 8 people need to succeed in all pursuits. You especially need financial security in order to feel happy with your life. You are ambitious, self-sufficient and career-minded. You don't give up on your goals and you often reach them even when there are huge hurdles along the way. You are stubborn, intense, persistent and a deep thinker, with great powers of concentration. You are very well organized and practical, so this goes a long way to helping you achieve your many goals in life."
    },
    {
        "Number": 9,
        "Benefits": "Number 9 people are very creative and have a high awareness of your own spirituality. You tend to gravitate towards careers where you can help mankind, especially through charitable work and even if you do not work in this area, you will be the first to donate to your charities and spend more time thinking about ways you can improve the lot of mankind. You are very honest, courteous and friendly, although you can be quite impressionable by people you highly respect. You are very passionate and appear a lot older than you actually are. You are a natural philosopher who values knowledge for its own sake, you have a need to know about everything."
    },
    {
        "Number": 11,
        "Benefits": "The Number 11 is the first Master Number, which means it is a number of strength and power. This number should never be reduced to a single digit as it is a special number. As a Number 11 person, you are usually successful in any goal you want to achieve, rarely failing in anything, you just keep on moving forward and onwards. You have a lot of energy, drive and will power, especially when it comes to your ambitions. You will take calculated risks that almost always give you positive results (much to the chagrin of some)."
    },
    {
        "Number": 22,
        "Benefits": "The Number 22 is another Master Number which is seen as the number of perfection. This number should never be reduced to a single digit as it is a special number. As a Number 22 person, you should have a pretty good life, not without any disappointment or loss, but generally less than others. You appear to have success in all your endeavors without really trying very hard (it isn't the case, but that is how you come across to others)."
    }
]

export const DestinyNumberBenefits = [
    {
        "Number": 1,
        "Benefits": "The number One person is a born leader. You will find yourself in a leadership role at some point in your life and it is who you are, independent, original and with a lot of initiative. Your life is destined to be interesting, with all your experiences there to help you develop your your steely determination, willpower and drive to succeed in your life. You need not be too aggressive or overbearing, just use your immense strengths to help you get what you want in life."
    },
    {
        "Number": 2,
        "Benefits": "The number Two person is a born diplomat. You are a naturally diplomatic, level-headed and calm person. You have excellent powers of persuasion which you use well to calm any difficult person or situation. You may not always want to be the peace-maker, but you will always be called upon to be this person because everyone respects your skills in this area. You are a very loving and caring person, but you can become a little too overly concerned for your family and loved ones, with your over-protective nature making them feel hemmed in."
    },
    {
        "Number": 3,
        "Benefits": "The number Three person is a total optimist. You are such a cheerful, bright, enthusiastic person who is very creative on many levels. You make a great companion for your partner or friends. You do well in business because you have a need to succeed in everything you take on. If you ever fail in anything, it hits you hard but you don't like to show your disappointments to anyone, so you just hide your pain behind your natural wit and humor so non-one ever knows."
    },
    {
        "Number": 4,
        "Benefits": "The number Four person is the ultimate manager who has great organizational skills. You are very efficient, methodical and systematic in the way you approach everything in life. You are the one who makes lists for everything you do - daily acclivities, work, shopping, everything! You are the perfect employee as you have a great way of being able to improve on current systems, so employers would do well to have you on their staff."
    },
    {
        "Number": 5,
        "Benefits": "The number Five person is a total communicator. You need variety and change in your life, otherwise you quickly become bored. You tend not to keep most of your friends for life, probably because you outgrow most of the people you know at any stage in your life. You have an innate restlessness which causes you to seek new experiences and this is which makes you change your path in life many times, because the one you are on now may soon bore you. Your attention span is very low, so you need constant excitement and variety."
    },
    {
        "Number": 6,
        "Benefits": "The number Six person is a nurturer. Your mission in life is to help those who are weak, unhappy and ailing in any way. You are a perfectionist, who is always striving to achieve the best possible for yourself. This makes you a hard task master, with high expectations for yourself and for others. Learn to release this need for perfection and life will flow even better. Surprisingly you actually do well in your own business, because you can channel all your care and tenderness to nurture it to grow and flourish. You also employ the best people to help you achieve success."
    },
    {
        "Number": 7,
        "Benefits": "The number Seven person is the educator and mystic. You are the one who loves to study everything, to research and work out fact from fantasy. You have a particular fascination with the hidden and mysterious, such as the occult and may even have some latent (or developed) psychic abilities. You make a wonderful partner, who is loving and caring, but you need to have freedom to follow your own pursuits. You would not do well with an overly domineering partner."
    },
    {
        "Number": 8,
        "Benefits": "The number Eight person is the successful business person. You thrive on responsibility and need to be in a position of authority and power. You need recognition from others of your many talents. You put in the hard work to achieve your goals, which means you tend to be more successful than the other Destiny Numbers, as you put in such a great effort to reach your goals."
    },
    {
        "Number": 9,
        "Benefits": "The number Nine person is the philanthropic, charitable and beautiful one. You have a fine appreciation for all things artistic and try to live your life in a way that beautifies your world in some way, no matter what you do. You have a great power to awaken people to the beauty that is inside their hearts and to help them achieve their goals."
    },
    {
        "Number": 11,
        "Benefits": "The number Eleven person is the performer. You are often associated with television, films or journalism - any career which puts you in front of a camera and which means you are in the public eye. You are a great communicator and so this means you also write very well. Your communication skills are useful when you impart your skills and knowledge onto other people. You have a knack of making friends who are influential and powerful and can help you in your life in some way. You have a lot of people who look up to you, as you go from success to success, which means you would be the perfect leader of any community, as people will listen to what you say and follow your lead."
    },
    {
        "Number": 22,
        "Benefits": "The number Twenty-two person is the one with magnetism and charisma. Even if you are not particularly beautiful, you have such a magnetism that draws other people to you. Your charming demeanor means you find yourself in the center of attention a lot, which you use to advance yourself in whatever way you can."
    }
]

export const getBenefits=(lifePathNum, destinyNum)=>{
    const {Benefits: life_path_num_benefits} = LifePathBenefits.filter(arr=>arr.Number == lifePathNum)[0];
    const {Benefits: destiny_num_benefits} = DestinyNumberBenefits.filter(arr=>arr.Number == destinyNum)[0];
    return { life_path_num_benefits, destiny_num_benefits }
 }