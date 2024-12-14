module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': 'ts-jest', // Garante que o Jest use o ts-jest para arquivos .ts
    },
    testMatch: ['**/?(*.)+(spec|test).ts'], // Padrão para arquivos de teste com .ts
  };
  