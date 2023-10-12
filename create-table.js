import sql from "./db.js"


// sql`DROP TABLE videos`.then(()=> console.log("Tabela Apagada com sucesso"))

sql`
    CREATE TABLE videos(
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(()=> console.log("Tabela Criada com sucesso")) 