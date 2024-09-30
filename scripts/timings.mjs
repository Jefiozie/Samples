/**
 * this is a small utility to check the time that each linting rule takes,
 * the time is of coarse not accurate, but it gives a good approximation,
 * and its also highly depending on the system that runs the linting.
 * but it gives a good idea of what rules are taking the most time.
 *
 * to get the timings file run:
 * `TIMING=100 DEBUG=eslint:cli ng lint > timings`
 *
 * after that you can run this script to get the results.
 * run it like this, from the root of the project:
 * `node ./scripts/eslint-timings.js`
 */
import { readFileSync } from 'node:fs';

const file = readFileSync('./timings', 'utf-8');

const result = file.split('\n').reduce((acc, line) => {
  const [ruleId, time] = line.split('|').map((s) => s.trim());
  const timeInt = parseFloat(time, 10);
  if (timeInt > 0) {
    acc.set(ruleId, (acc.get(ruleId) ?? 0) + timeInt);
  }
  return acc;
}, new Map());
const totalTime = [...result.values()].reduce((acc, time) => acc + time, 0);

console.table(
  [...result.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([ruleId, time]) => [ruleId, time.toFixed(2) + 'Ms', ((time / totalTime) * 100).toFixed(2) + '%']),
);
