const express = require('express');
const app = express();
app.use(express.json());

// Hardcoded sample data for training
const xData = [1, 2, 3, 4, 5];
const yData = [2, 3, 5, 4, 6];

// Calculate Linear Regression (y = mx + c)
function trainModel(x, y) {
  const n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
  for (let i = 0; i < n; i++) {
    sumX += x[i]; sumY += y[i];
    sumXY += x[i] * y[i]; sumXX += x[i] * x[i];
  }
  const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const c = (sumY - m * sumX) / n;
  return { m, c };
}

const model = trainModel(xData, yData);

app.post('/predict', (req, res) => {
  const { x } = req.body;
  if (x === undefined) return res.status(400).send({ error: "Provide 'x' in JSON body" });
  const prediction = model.m * parseFloat(x) + model.c;
  res.json({ input: x, prediction: prediction, slope: model.m, intercept: model.c });
});

app.listen(3000, () => console.log('LR Prediction Service running on port 3000'));
