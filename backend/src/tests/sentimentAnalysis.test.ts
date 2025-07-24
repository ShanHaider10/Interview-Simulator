import analyzeSentiment from '../utils/sentimentAnalysis';

describe('Sentiment Analysis', () => {
  it('should return positive', () => {
    expect(analyzeSentiment('I had a great time')).toBe('positive');
  });

  it('should return negative', () => {
    expect(analyzeSentiment('That was a bad idea')).toBe('negative');
  });

  it('should return neutral', () => {
    expect(analyzeSentiment('It was okay')).toBe('neutral');
  });
});
