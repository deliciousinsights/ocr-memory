import chai from 'chai'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'

chai.use(dirtyChai).use(createChaiJestDiff())
