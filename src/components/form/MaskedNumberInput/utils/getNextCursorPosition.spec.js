import getNextCursorPosition from './getNextCursorPosition';

describe('getNextCursorPosition', () => {
  it('return correct position when adding new character at the end', () => {
    expect(getNextCursorPosition(
      '1',
      '',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '1',
      '0',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '01',
      '0',
      2,
    )).toBe(2);

    expect(getNextCursorPosition(
      '0001',
      '000',
      4,
    )).toBe(5);

    expect(getNextCursorPosition(
      '0,0001',
      '0,000',
      6,
    )).toBe(6);

    expect(getNextCursorPosition(
      '000,0001',
      '000,000',
      8,
    )).toBe(9);
  });

  it('return correct position when adding new character at the beginning', () => {
    expect(getNextCursorPosition(
      '1',
      '',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '10',
      '0',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '1000',
      '000',
      1,
    )).toBe(1);
  });

  it('return correct position when adding new character in the middle', () => {
    expect(getNextCursorPosition(
      '010',
      '00',
      2,
    )).toBe(2);

    expect(getNextCursorPosition(
      '0100',
      '000',
      2,
    )).toBe(3);

    expect(getNextCursorPosition(
      '01,000',
      '0,000',
      2,
    )).toBe(2);

    expect(getNextCursorPosition(
      '0010,000',
      '000,000',
      3,
    )).toBe(4);

    expect(getNextCursorPosition(
      '0100,000',
      '000,000',
      2,
    )).toBe(3);
  });

  it('return correct position when deleting character at the end', () => {
    expect(getNextCursorPosition(
      '',
      '1',
      0,
    )).toBe(0);

    expect(getNextCursorPosition(
      '0',
      '01',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '0,00',
      '0,001',
      4,
    )).toBe(3);
  });

  it('return correct position when deleting character at the beginning', () => {
    expect(getNextCursorPosition(
      '0',
      '10',
      0,
    )).toBe(0);

    expect(getNextCursorPosition(
      ',000',
      '1,000',
      0,
    )).toBe(0);
  });

  it('return correct position when deleting character in the middle', () => {
    expect(getNextCursorPosition(
      '00',
      '010',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '0,00',
      '0,100',
      2,
    )).toBe(1);

    expect(getNextCursorPosition(
      '00,00',
      '00,100',
      3,
    )).toBe(3);
  });

  it('return correct position when adding character directly after a comma', () => {
    expect(getNextCursorPosition(
      '0,1000',
      '0,000',
      3,
    )).toBe(2);
  });

  it('return correct position when adding an invalid character', () => {
    expect(getNextCursorPosition(
      '0a,000',
      '0,000',
      2,
    )).toBe(1);

    expect(getNextCursorPosition(
      'a0,000',
      '0,000',
      1,
    )).toBe(0);

    expect(getNextCursorPosition(
      '0,a000',
      '0,000',
      3,
    )).toBe(2);
  });

  it('return correct position when try to delete a comma', () => {
    expect(getNextCursorPosition(
      '0000',
      '0,000',
      1,
    )).toBe(1);

    expect(getNextCursorPosition(
      '000000',
      '000,000',
      3,
    )).toBe(3);
  });

  it('allow decimal', () => {
    expect(getNextCursorPosition(
      '0.00',
      '000',
      2,
      {
        allowDecimal: false,
      },
    )).toBe(1);

    const allowDecimal = true;
    expect(getNextCursorPosition(
      '0.00',
      '000',
      2,
      {
        allowDecimal,
      },
    )).toBe(2);

    expect(getNextCursorPosition(
      '00.010',
      '00.00',
      5,
      {
        allowDecimal,
      },
    )).toBe(5);

    expect(getNextCursorPosition(
      '00.000010',
      '00.00000',
      8,
      {
        allowDecimal,
      },
    )).toBe(8);
  });
});
