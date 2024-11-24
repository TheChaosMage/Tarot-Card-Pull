const body = document.body
const pull_card_button = document.getElementById("pull_card_button")
const card_meaning = document.getElementById("card_meaning")
const card_name = document.getElementById("card_name")
document.getElementById("card_img").src = "Cards/WR78_Card+Back.jpg"
const click_card = document.getElementById("card_img")

// its an obect to hold card objects so i can display names and the meaning of thr cards so i can randomly select them later
const Deck = {
    //Card:["Title","Meaning"] eventually img too
    //major arcana
    The_Fool:["The Fool","innocence, new beginnings, free spirit","Cards/major_arcana_fool.png"],
    The_Magician: ["The Magician","willpower, desire, creation, manifestation","Cards/major_arcana_magician.png"],
    The_High_Preist:["The High Priestess","intuitive, unconscious, inner voice","Cards/major_arcana_priestess.png"],
    The_Empress:["The Empress","motherhood, fertility, nature","Cards/major_arcana_empress.png"],
    The_Emperor:["The Emperor","authority, structure, control, fatherhood","Cards/major_arcana_emperor.png"],
    The_Hierophant:["The Hierophant","tradition, conformity, morality, ethics","Cards/major_arcana_hierophant.png"],
    The_Lovers:["The Lovers","partnerships, duality, union","Cards/major_arcana_lovers.png"],
    The_Chariot:["The Chariot","direction, control, willpower","Cards/major_arcana_chariot.png"],
    Strength:["Strength","inner strength, bravery, compassion, focus","Cards/major_arcana_strength.png"],
    The_Hermit:["The Hermit","contemplation, search for truth, inner guidance","Cards/major_arcana_hermit.png"],
    The_Wheel_of_Fortune:["The Wheel of Fortune","change, cycles, inevitable fate ","Cards/major_arcana_fortune.png"],
    Justice:["Justice","cause and effect, clarity, truth","Cards/major_arcana_justice.png"],
    The_Hanged_Man:["The Hanged Man","sacrifice, release, martyrdom","Cards/major_arcana_hanged.png"],
    Death:["Death","end of cycle, beginnings, change, metamorphosis ","Cards/major_arcana_death.png"],
    Temperance:["Temperance","middle path, patience, finding meaning ","Cards/major_arcana_temperance.png"],
    The_Devil:["The Devil","addiction, materialism, playfulness","Cards/major_arcana_devil.png"],
    The_Tower:["The Tower","sudden upheaval, broken pride, disaster ","Cards/major_arcana_tower.png"],
    The_Star:["The Star","hope, faith, rejuvenation","Cards/major_arcana_star.png"],
    The_Moon:["The Moon","unconscious, illusions, intuition ","Cards/major_arcana_moon.png"],
    The_Sun:["The Sun","joy, success, celebration, positivity","Cards/major_arcana_sun.png"],
    Judgement:["Judgement","reflection, reckoning, awakening ","Cards/major_arcana_judgement.png"],
    The_World:["The World","fulfillment, harmony, completion","Cards/major_arcana_world.png"],
    //minor archana
    //cups
    The_Ace_of_Cups:["The Ace of Cups","new feelings, spirituality, intuition","Cards/minor_arcana_cups_ace.png"],
    Two_of_Cups:["Two of Cups","unity, partnership, connection","Cards/minor_arcana_cups_2.png"],
    Three_of_Cups:["Three of Cups","friendship, community, happiness","Cards/minor_arcana_cups_3.png"],
    Four_of_Cups:["Four of Cups","apathy, contemplation, disconnectedness","Cards/minor_arcana_cups_4.png"],
    Five_of_Cups:["Five of Cups","loss, grief, self-pity","Cards/minor_arcana_cups_5.png"],
    Six_of_Cups:["Six of Cups","familiarity, happy memories, healing","Cards/minor_arcana_cups_6.png"],
    Seven_of_Cups:["Seven of Cups","searching for purpose, choices, daydreaming","Cards/minor_arcana_cups_7.png"],
    Eight_of_Cups:["Eight of Cups","walking away, disillusionment, leaving behind","Cards/minor_arcana_cups_8.png"],
    Nine_of_Cups:["Nine of Cups","satisfaction, emotional stability, luxur","Cards/minor_arcana_cups_9.png"],
    Ten_of_Cups:["Ten of Cups","inner happiness, fulfillment, dreams coming true","Cards/minor_arcana_cups_10.png"],
    The_Page_of_Cups:["The Page of Cups","happy surprise, dreamer, sensitivity","Cards/minor_arcana_cups_page.png"],
    The_Knight_of_Cups:["The Knight of Cups","following the heart, idealist, romantic","Cards/minor_arcana_cups_knight.png"],
    The_Queen_of_Cups:["The Queen of Cups","compassion, calm, comfort","Cards/minor_arcana_cups_queen.png"],
    The_King_of_Cups:["The King of Cups","compassion, control, balance","Cards/minor_arcana_cups_king.png"],
    //Swords
    The_Ace_of_Swords:["The Ace of Swords","breakthrough, clarity, sharp mind ","Cards/minor_arcana_swords_ace.png"],
    Two_of_Swords:["Two of Swords","difficult choices, indecision, stalemate ","Cards/minor_arcana_swords_2.png"],
    Three_of_Swords:["Three of Swords","heartbreak, suffering, grief","Cards/minor_arcana_swords_3.png"],
    Four_of_Swords:["Four of Swords","rest, restoration, contemplation s","Cards/minor_arcana_swords_4.png"],
    Five_of_Swords:["Five of Swords","unbridled ambition, win at all costs, sneakiness ","Cards/minor_arcana_swords_5.png"],
    Six_of_Swords:["Six of Swords","transition, leaving behind, moving on ","Cards/minor_arcana_swords_6.png"],
    Seven_of_Swords:["Seven of Swords","deception, trickery, tactics and strategy ","Cards/minor_arcana_swords_7.png"],
    Eight_of_Swords:["Eight of Swords","imprisonment, entrapment, self-victimization ","Cards/minor_arcana_swords_8.png"],
    Nine_of_Swords:["Nine of Swords","anxiety, hopelessness, trauma ","Cards/minor_arcana_swords_9.png"],
    Ten_of_Swords:["Ten of Swords","failure, collapse, defeat ","Cards/minor_arcana_swords_10.png"],
    The_Page_of_Swords:["The Page of Swords","curiosity, restlessness, mental energy ","Cards/minor_arcana_swords_page.png"],
    The_Knight_of_Swords:["The Knight of Swords","action, impulsiveness, defending beliefs y","Cards/minor_arcana_swords_knight.png"],
    The_Queen_of_Swords:["The Queen of Swords","complexity, perceptiveness, clear mindedness ","Cards/minor_arcana_swords_queen.png"],
    The_King_of_Swords:["The King of Swords","head over heart, discipline, truth","Cards/minor_arcana_swords_king.png"],
    //Wands
    The_Ace_of_Wands:["The Ace of Wands","creation, willpower, inspiration, desire","Cards/minor_arcana_wands_ace.png"],
    Two_of_Wands:["Two of Wands","planning, making decisions, leaving home","Cards/minor_arcana_wands_2.png"],
    Three_of_Wands:["Three of Wands","looking ahead, expansion, rapid growth","Cards/minor_arcana_wands_3.png"],
    Four_of_Wands:["Four of Wands","community, home, celebration","Cards/minor_arcana_wands_4.png"],
    Five_of_Wands:["Five of Wands","competition, rivalry, conflict","Cards/minor_arcana_wands_5.png"],
    Six_of_Wands:["Six of Wands","victory, success, public reward","Cards/minor_arcana_wands_6.png"],
    Seven_of_Wands:["Seven of Wands","perseverance, defensive, maintaining control , overwhelmed","Cards/minor_arcana_wands_7.png"],
    Eight_of_Wands:["Eight of Wands","rapid action, movement, quick decisions ","Cards/minor_arcana_wands_8.png"],
    Nine_of_Wands:["Nine of Wands","resilience, grit, last stand","Cards/minor_arcana_wands_9.png"],
    Ten_of_Wands:["Ten of Wands","accomplishment, responsibility, burden, burnt out","Cards/minor_arcana_wands_10.png"],
    The_Page_of_Wands:["The Page of Wands","exploration, excitement, freedom, creating conflict","Cards/minor_arcana_wands_page.png"],
    The_Knight_of_Wands:["The Knight of Wands","action, adventure, fearlessnes","Cards/minor_arcana_wands_knight.png"],
    The_Queen_of_Wands:["The Queen of Wands","courage, determination, joy]","Cards/minor_arcana_wands_queen.png"],
    The_King_of_Wands:["The King of Wands"," big picture, leader, overcoming challenges","Cards/minor_arcana_wands_king.png"],
    //Pentacles
    The_Ace_of_Pentacles:["The Ace of Pentacles","opportunity, prosperity, new venture","Cards/minor_arcana_pentacles_ace.png"],
    Two_of_Pentacles:["Two of Pentacles","balancing decisions, priorities, adapting to change","Cards/minor_arcana_pentacles_2.png"],
    Three_of_Pentacles:["Three of Pentacles","teamwork, collaboration, building","Cards/minor_arcana_pentacles_3.png"],
    Four_of_Pentacles:["Four of Pentacles","conservation, frugality, security","Cards/minor_arcana_pentacles_4.png"],
    Five_of_Pentacles:["Five of Pentacles","need, poverty, insecurity ","Cards/minor_arcana_pentacles_5.png"],
    Six_of_Pentacles:["Six of Pentacles","charity, generosity, sharing ","Cards/minor_arcana_pentacles_6.png"],
    Seven_of_Pentacles:["Seven of Pentacles","hard work, perseverance, diligence ","Cards/minor_arcana_pentacles_7.png"],
    Eight_of_Pentacles:["Eight of Pentacles","apprenticeship, passion, high standards =","Cards/minor_arcana_pentacles_8.png"],
    Nine_of_Pentacles:["Nine of Pentacles"," fruits of labor, rewards, luxury","Cards/minor_arcana_pentacles_9.png"],
    Ten_of_Pentacles:["Ten of Pentacles","legacy, culmination, inheritance","Cards/minor_arcana_pentacles_10.png"],
    The_Page_of_Pentacles:["The Page of Pentacles","ambition, desire, diligence ","Cards/minor_arcana_pentacles_page.png"],
    The_Knight_of_Pentacles:["The Knight of Pentacles","efficiency, hard work, responsibility","Cards/minor_arcana_pentacles_knight.png"],
    The_Queen_of_Pentacles:["The Queen of Pentacles","practicality, creature comforts, financial security","Cards/minor_arcana_pentacles_queen.png"],
    The_King_of_Pentacles:["The King of Pentacles","abundance, prosperity, security","Cards/minor_arcana_pentacles_king.png"]
    
    
    


}

function pullCard(){
    const deck_cards = Object.keys(Deck)
    const random_card = deck_cards[Math.floor(Math.random() * deck_cards.length)]
    const random_meaning = Deck[random_card]
    setTimeout(()=>{document.getElementById("card_img").src = "Cards/WR78_Card+Back.jpg"},100)
    document.getElementById("card_img").classList.add("flip_ani")
    setTimeout(function(){
        document.getElementById("card_img").src = random_meaning[2]
    },800)
    setTimeout(function(){
        document.getElementById("card_img").classList.remove("flip_ani")
        card_meaning.textContent = `${random_meaning[1]}`
        card_name.textContent = `${random_meaning[0]}`
    },1000)
    


}

click_card.addEventListener("click",pullCard)