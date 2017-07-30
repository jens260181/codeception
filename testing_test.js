
Feature('Testing');

Scenario('test something', (I) => {
	I.amOnPage('/');
	I.resizeWindow(1200, 800);
  	I.see('Musik');
	I.see('Ja, einverstanden');
	I.click('#btn-cookie-accept');
	
	I.fillField('search', 'paris');
	I.wait(2);
	I.see('Paris-New York', '.header-search--suggestions');

	I.saveScreenshot('schnellsuche-filled-in.png');
	
	I.click('Preise');
	I.executeScript(function() {
		// now we are inside browser context
		addCart(5);
	});
	I.wait(2);
	I.saveScreenshot('preise.png');
});

Scenario('Test Login', (I) => {
	
	// Basics
	I.amOnPage('/login');
	I.resizeWindow(1200, 800);
	
	// Cookie Banner weg
	I.see('Ja, einverstanden');
	I.click('#btn-cookie-accept');
	
	// In der uRL darf kein Parameter stehen
	I.dontSeeInCurrentUrl('?');
	I.dontSeeInCurrentUrl('&');
	I.dontSeeElement('.error');
	
	// Formular prüfen und ausfüllen
  	I.seeElement('form');
	I.fillField('email', 'User');
	I.fillField('password', '"/Passwort"');
	I.wait(1);
	I.saveScreenshot('form-wrong-access-1.png');
	I.click('Anmelden');
	I.wait(2);
	I.saveScreenshot('form-wrong-access-2.png');
	I.seeElement('.error');
	I.seeInField('email', '');
	I.seeInField('password', '');
	
	I.click('Hier geht es zur Registrierung');
	I.wait(2);
	I.saveScreenshot('Registrierung.png');
	I.executeScript(function() {
		// now we are inside browser context
		addCart(5);
	});
	I.wait(2);
	I.saveScreenshot('cart-from-reg.png');
	
	
});
