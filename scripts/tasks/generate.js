import generateSassVariables from 'src/scripts/generateSassVariables';
import generateEsModuleEntryFile from 'src/scripts/generateEsModuleEntryFile';

export default async function generate(config) {
  await generateSassVariables(config);
  await generateEsModuleEntryFile();
}
