import { getGoodbye } from './goodbye-controller';

describe('Say something to me', () => {
  test('should returns adios in es code', (done) => {
    const goodbye = getGoodbye('es');
    expect(goodbye).toBe('Adiós');
    done();
  });
});
