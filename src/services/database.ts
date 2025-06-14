// External Libraries
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return SQLite.openDatabase({ name: 'empresas.db', location: 'default' });
};

export const createTable = async () => {
  const db = await getDBConnection();

  const query = `
    CREATE TABLE IF NOT EXISTS empresas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cnpj TEXT,
      razao_social TEXT,
      rua TEXT,
      numero TEXT,
      bairro TEXT,
      municipio TEXT,
      uf TEXT,
      cep TEXT,
      imagem TEXT
    );
  `;

  return db.executeSql(query);
};

export const insertEmpresa = async (
  cnpj: string,
  razao: string,
  rua: string,
  numero: string,
  bairro: string,
  municipio: string,
  uf: string,
  cep: string,
  imagem: string,
) => {
  const db = await getDBConnection();
  return db.executeSql(
    'INSERT INTO empresas (cnpj, razao_social, rua, numero, bairro, municipio, uf, cep, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [cnpj, razao, rua, numero, bairro, municipio, uf, cep, imagem]
  );
};

export const deleteEmpresa = async (
  cnpj: string
) => {
  const db = await getDBConnection();
  return db.executeSql(
    'DELETE FROM empresas WHERE cnpj = ?',
    [cnpj]
  );
};

export const getEmpresas = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM empresas',
        [],
        (_, result) => {
          const empresas = [];
          for (let i = 0; i < result.rows.length; i++) {
            empresas.push(result.rows.item(i));
          }
          resolve(empresas);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
