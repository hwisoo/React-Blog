import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upvotes: 0,
  },
  'learn-node': {
    upvotes: 0,
  },
  'learn-angular': {
    upvotes: 0,
  },
}

import express from 'express';

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;
  res.status(200).send(`${articleName} now has ${articleInfo[articleName].upvotes}`)
})
app.listen(8000, ()=> console.log('Listening on port 8000'));