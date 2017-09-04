const express = require('express')
const app = express ()

/*app.get('/', (req, res) =>{
	res.send('Hey Mistrzu!\njak się dziś miewasz?')
})
*/
app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
