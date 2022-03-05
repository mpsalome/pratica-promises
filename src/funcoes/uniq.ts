/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]) :T[] => {
  
  let newArr = args.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  });

  return newArr;
};