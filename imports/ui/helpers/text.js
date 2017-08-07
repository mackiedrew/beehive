export const capitalizeWord = (word: string): string => {
  const newFirstLetter: string = word[0].toUpperCase();
  const restOfWord: string = word.substring(1);
  const capitalizedWord: string = newFirstLetter + restOfWord;
  return capitalizedWord;
};

export const capitalizeWords = (words: Array<string>): Array<string> =>
  words.map(capitalizeWord);

export const camelCaseToTitle = (camelCase: string): string => {
  const camelCaseWordRegex = /^[a-z]+|[A-Z][a-z]*/g;
  const words = camelCase.match(camelCaseWordRegex);
  const capitalizedWords: Array<string> = capitalizeWords(words);
  const title: string = capitalizedWords.join(" ");
  return title;
};
