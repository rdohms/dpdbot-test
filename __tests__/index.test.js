describe('Always True Test', () => {
  it('should always pass', (done) => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 30000); // 30 seconds
  });
});
