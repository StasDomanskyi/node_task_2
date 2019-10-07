const verbs = [
  "add", "allow", "bake", "bang", "call", "chase", "damage", "drop", "end","escape", "fasten", "fix", "gather", "grab", "hang", "hug", "imagine", "itch", "jog", "jump", "kick", "knit", "land", "lock", "march", "mix", "name", "notice", "obey", "open", "pass", "promise", "question", "reach", "rinse", "scatter", "stay", "talk","turn", "unite", "use", "vanish", "visit", "walk", "work", "yawn", "yell", "zip", "zoom"
];

module.exports = (id) => {
  
  let randomIndex = Math.floor(Math.random() * verbs.length);
  return {
    "id": id,
    "title": `${verbs[randomIndex]} that stuff`,
    "order": 1,
    "assignee": "user",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, officiis."
  }
};