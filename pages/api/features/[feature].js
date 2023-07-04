import deepai from "deepai"
deepai.setApiKey(process.env.DEEPAI_API || '');

export default function handler(req, res) {
  console.log(req.body, req.query);

  if (req.method === 'POST') {
    console.log(req.body, req.params);
  }
}