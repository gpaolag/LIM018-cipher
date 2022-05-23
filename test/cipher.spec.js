// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {
    
    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "H IJKLMNOPQRSTUVWXYZABCDEFG" for "A BCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'A BCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('H IJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset -26', () => {
      expect(cipher.encode(-26, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "DEFGHIJKLMNOPQRSTUVWXYZABC" with offset -23', () => {
      expect(cipher.encode(-23, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "ZABCDEFGHIJKLMNOPQRSTUVWXY" with offset -27', () => {
      expect(cipher.encode(-27, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('ZABCDEFGHIJKLMNOPQRSTUVWXY');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "abcdefghijklmnopqrstuvwxyz" with offset 26', () => {
       expect(cipher.encode(26, 'abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
     });

     it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" for " !@"', () => {
       expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "A BCDEFGHIJKLMNOPQRSTUVWXYZ" for "H IJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'H IJKLMNOPQRSTUVWXYZABCDEFG')).toBe('A BCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 26', () => {
      expect(cipher.decode(26, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "DEFGHIJKLMNOPQRSTUVWXYZABC" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset -23', () => {
      expect(cipher.decode(-23, 'DEFGHIJKLMNOPQRSTUVWXYZABC')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "ZABCDEFGHIJKLMNOPQRSTUVWXY" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset -27', () => {
      expect(cipher.decode(-27, 'ZABCDEFGHIJKLMNOPQRSTUVWXY')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
       expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
     });

    it('should return "abcdefghijklmnopqrstuvwxyz" for "abcdefghijklmnopqrstuvwxyz" with offset 26', () => {
      expect(cipher.decode(26, 'abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
     it('should return " !@" para " !@"', () => {
       expect(cipher.decode(33, ' !@')).toBe(' !@');
     });
  });

});
