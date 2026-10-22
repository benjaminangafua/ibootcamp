import { test } from 'node:test'
import assert from 'node:assert/strict'
import { baseBudget, totalBudget, totalHours, initialCash, budgetLines, program, curriculum, whatsappUrl } from './content'

test('the delivery and budget figures reconcile', () => {
  assert.equal(totalHours, 320)
  assert.equal(program.terms * program.sessionsPerTerm, 80)
  assert.equal(baseBudget, 46420)
  assert.equal(totalBudget, 51062)
  assert.equal(initialCash, 20218)
  assert.equal(budgetLines.reduce((total, line) => total + line.amount, 0), totalBudget)
  assert.equal(program.feePayingLearners + program.waivers, program.learners)
  assert.equal(program.monthlyFee * program.feePayingLearners * program.months, 5760)
})
test('the curriculum gives both tracks an output in all eight terms', () => {
  assert.equal(curriculum.length, 8)
  for (const term of curriculum) {
    assert.ok(term.junior.length > 20)
    assert.ok(term.senior.length > 20)
    assert.equal(term.skills.length, 3)
  }
})
test('contact links open a correctly encoded draft to the supplied phone', () => {
  const message = 'Hello, a learner & parent would like to ask about fees?'
  const url = new URL(whatsappUrl(message))
  assert.equal(url.host, 'wa.me')
  assert.equal(url.pathname, '/231775939247')
  assert.equal(url.searchParams.get('text'), message)
})
