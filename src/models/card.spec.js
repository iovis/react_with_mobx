import Card from './card';

describe('Card', () => {
  it('generates an id', () => {
    // Mock time
    const now = Date.now();
    Date.now = jest.fn().mockReturnValue(now);

    const card = new Card('heyo!');

    expect(card.id).toBeCloseTo(now);
  });

  it('generates the proper body',() => {
    const card = new Card('heyo!');
    expect(card.body).toEqual('heyo!');
  });
});
