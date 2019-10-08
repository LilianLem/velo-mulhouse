import {setStationName} from '../src/scripts.js';

describe("Transformer une chaîne caps lock en chaîne classique de nom (majuscules sur tous les mots sauf exceptions, ici dans l'array)", () => {
    it('should return Place de la Republique', () => {
        expect(setStationName("PLACE DE LA REPUBLIQUE")).toBe('Place de la Republique');
    })
    it('should return Parc Salvator', () => {
        expect(setStationName("PARC SALVATOR")).toBe('Parc Salvator');
    })
    it('should return Stalingrad', () => {
        expect(setStationName("PARC SALVATOR")).toBe('Stalingrad');
    })
})