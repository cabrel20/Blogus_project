# Structure du dossier source

/src
|-- /assets
| |-- /images
| |-- /fonts
|
|-- /components
| |-- /Header
| | |-- Header.js
| | |-- Header.test.js
| | |-- Header.css
| | |-- index.js
|
|-- /containers
| |-- /Home
| | |-- Home.js
| | |-- Home.test.js
| | |-- Home.css
| | |-- index.js
|
|-- /services
| |-- api.js
| |-- auth.js
|
|-- /contexts
| |-- AuthContext.js
| |-- ThemeContext.js
|
|-- /hooks
| |-- useLocalStorage.js
| |-- useAPI.js
|
|-- /utils
| |-- helpers.js
| |-- constants.js
|
|-- /config
| |-- routes.js
| |-- settings.js
|

**Explications :**

- **assets :** Contient des ressources statiques telles que des images et des polices.

- **components :** Comprend des composants réutilisables, chacun dans son propre dossier avec des fichiers JavaScript, CSS, et un fichier d'export (`index.js`).

- **containers :** Des composants qui gèrent la logique métier et l'état de l'application. Organisés de manière similaire aux composants réutilisables.

- **services :** Contient des modules pour gérer les appels API, l'authentification et d'autres services.

- **contexts :** Des contextes React pour gérer l'état global.

- **hooks :** Des hooks réutilisables dans toute l'application.

- **utils :** Des fonctions utilitaires et des constantes.

- **config :** Des fichiers de configuration tels que les routes et les paramètres de l'application.
