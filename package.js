Package.describe({
  summary: "Twilio NPM API Wrapper",
  version: "1.6.0"
});

Npm.depends({ "twilio": "1.6.0" });

Package.on_use(function(api) {
	if(api.versionsFrom) api.versionsFrom("METEOR-CORE@0.9.0-atm");
	if (api.export) api.export('Twilio', 'server');	
	api.add_files('twilio_npm.js', 'server');
});