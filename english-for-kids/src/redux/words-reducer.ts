import { ADD_NEW_WORD } from './types';
const initialState = {
    words: {
        fly: ["./images/fly.jpg", "fly", "летать", "./souns/fly.mp3", "action_a"],
        dance: ["./images/dance.jpg", "dance", "танцевать", "./souns/dance.mp3", "action_a"],
        tofish: ["./images/fish.jpg", "fish", "рыбачить", "./souns/fish.mp3", "action_a"],
        spin: ["./images/spin.jpg", "spin", "крутиться", "./souns/spin.mp3", "action_a"],
        scream: ["./images/scream.jpg", "scream", "кричать", "./souns/scream.mp3", "action_a"],
        hug: ["./images/hug.jpg", "hug", "обнимать", "./souns/hug.mp3", "action_a"],
        cry: ["./images/cry.jpg", "cry", "плакать", "./souns/cry.mp3", "action_a"],
        roll: ["./images/roll.jpg", "roll", "катиться", "./souns/roll.mp3", "action_a"],
        ride: ["./images/ride.jpg", "ride", "ездить", "./souns/ride.mp3", "action_b"],
        sing: ["./images/sing.jpg", "sing", "петь", "./souns/sing.mp3", "action_b"],
        skip: ["./images/skip.jpg", "skip", "скакать", "./souns/skip.mp3", "action_b"],
        point: ["./images/point.jpg", "point", "указывать", "./souns/point.mp3", "action_b"],
        run: ["./images/run.jpg", "run", "бежать", "./souns/run.mp3", "action_b"],
        play: ["./images/play.jpg", "play", "играть", "./souns/play.mp3", "action_b"],
        swim: ["./images/swim.jpg", "swim", "плавать", "./souns/swim.mp3", "action_b"],
        open: ["./images/open.jpg", "open", "открывать", "./souns/open.mp3", "action_b"],
        whistle: ["./images/whistle.jpg", "whistle", "свистеть", "./souns/whistle.mp3", "action_c"],
        carry: ["./images/carry.jpg", "carry", "нести", "./souns/carry.mp3", "action_c"],
        dive: ["./images/dive.jpg", "dive", "нырять", "./souns/dive.mp3", "action_c"],
        jump: ["./images/jump.jpg", "jump", "приыгать", "./souns/jump.mp3", "action_c"],
        draw: ["./images/draw.jpg", "draw", "рисовать", "./souns/draw.mp3", "action_c"],
        argue: ["./images/argue.jpg", "argue", "спорить", "./souns/argue.mp3", "action_c"],
        build: ["./images/build.jpg", "build", "строить", "./souns/build.mp3", "action_c"],
        push: ["./images/push.jpg", "push", "толкать", "./souns/push.mp3", "action_c"],
        big: ["./images/big.jpg", "big", "большой", "./souns/big.mp3", "adjective"],
        small: ["./images/small.jpg", "small", "маленький", "./souns/small.mp3", "adjective"],
        slow: ["./images/slow.jpg", "slow", "медленный", "./souns/slow.mp3", "adjective"],
        fast: ["./images/fast.jpg", "fast", "быстрый", "./souns/fast.mp3", "adjective"],
        old: ["./images/old.jpg", "old", "старый", "./souns/old.mp3", "adjective"],
        young: ["./images/young.jpg", "young", "молодой", "./souns/young.mp3", "adjective"],
        tall: ["./images/tall.jpg", "tall", "длинный", "./souns/tall.mp3", "adjective"],
        beautiful: ["./images/beautiful.jpg", "beautiful", "красивый", "./souns/beautiful.mp3", "adjective"],
        bird: ["./images/bird.jpg", "bird", "птичка", "./souns/bird.mp3", "animal_a"],
        cat: ["./images/cat.jpg", "cat", "кот", "./souns/cat.mp3", "animal_a"],
        chick: ["./images/chick.jpg", "chick", "ципленок", "./souns/chick.mp3", "animal_a"],
        chicken: ["./images/chicken.jpg", "chicken", "курица", "./souns/chicken.mp3", "animal_a"],
        dog: ["./images/dog.jpg", "dog", "собака", "./souns/dog.mp3", "animal_a"],
        dolphin: ["./images/dolphin.jpg", "dolphin", "дельфин", "./souns/dolphin.mp3", "animal_a"],
        fish: ["./images/fish1.jpg", "fish", "рыба", "./souns/fish.mp3", "animal_a"],
        frog: ["./images/frog.jpg", "frog", "лягушка", "./souns/frog.mp3", "animal_a"],
        horse: ["./images/horse.jpg", "horse", "лошадь", "./souns/horse.mp3", "animal_b"],
        giraffe: ["./images/giraffe.jpg", "giraffe", "жираф", "./souns/giraffe.mp3", "animal_b"],
        lion: ["./images/lion.jpg", "lion", "лев", "./souns/lion.mp3", "animal_b"],
        mouse: ["./images/mouse.jpg", "mouse", "мышь", "./souns/mouse.mp3", "animal_b"],
        pig: ["./images/pig.jpg", "pig", "свинья", "./souns/pig.mp3", "animal_b"],
        rabbit: ["./images/rabbit.jpg", "rabbit", "кролик", "./souns/rabbit.mp3", "animal_b"],
        sheep: ["./images/sheep.jpg", "sheep", "овечка", "./souns/sheep.mp3", "animal_b"],
        turtle: ["./images/turtle.jpg", "turtle", "черепаха", "./souns/turtle.mp3", "animal_b"],
        coat: ["./images/coat.jpg", "coat", "пальто", "./souns/coat.mp3", "clothes"],
        pants: ["./images/pants.jpg", "pants", "брюки", "./souns/pants.mp3", "clothes"],
        skirt: ["./images/skirt.jpg", "skirt", "юбка", "./souns/skirt.mp3", "clothes"],
        dress: ["./images/dress.jpg", "dress", "платье", "./souns/dress.mp3", "clothes"],
        shoe: ["./images/shoe.jpg", "shoe", "туфли", "./souns/shoe.mp3", "clothes"],
        shirt: ["./images/shirt.jpg", "shirt", "рубашка", "./souns/shirt.mp3", "clothes"],
        boot: ["./images/boot.jpg", "boot", "ботинок", "./souns/boot.mp3", "clothes"],
        blouse: ["./images/blouse.jpg", "blouse", "блузка", "./souns/blouse.mp3", "clothes"],
        smile: ["./images/smile.jpg", "smile", "улыбаться", "./souns/smile.mp3", "emotions"],
        angry: ["./images/angry.jpg", "angry", "злиться", "./souns/angry.mp3", "emotions"],
        sad: ["./images/sad.jpg", "sad", "грусть", "./souns/sad.mp3", "emotions"],
        scared: ["./images/scared.jpg", "scared", "испуганный", "./souns/scared.mp3", "emotions"],
        laugh: ["./images/laugh.jpg", "laugh", "смех", "./souns/laugh.mp3", "emotions"],
        tired: ["./images/tired.jpg", "tired", "уставший", "./souns/tired.mp3", "emotions"],
        happy: ["./images/happy.jpg", "happy", "счастливый", "./souns/happy.mp3", "emotions"],
        surprised: ["./images/surprised.jpg", "surprised", "удивленный", "./souns/surprised.mp3", "emotions"]
    }
}

export const WordsReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case ADD_NEW_WORD: 
            return {...state, words: action.payload}
        default: return state
    }
}