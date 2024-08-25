const express = require("express");
const app = express();
app.use(express.json());
app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";

    for (const item of data) {
        if (!isNaN(item)) {
          numbers.push(item);
        } else if (item.length === 1 && isNaN(item)) {
          alphabets.push(item);
          
          const itemUpper = item.toUpperCase();
          if (!highest_alphabet || itemUpper > highest_alphabet.toUpperCase()) {
            highest_alphabet = item;
          }
        }
      }
      

    res.json({
      is_success: true,
      user_id: "nikhil_16072003",
      email: "nikhilreddyambati.2k3@gmail.com",
      roll_number: "21BPS1345",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});