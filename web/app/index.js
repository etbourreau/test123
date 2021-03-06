//Import Basic/Core
import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'
import uiBootstrap from 'angular-ui-bootstrap'
import { route } from './app.route'
import jssha from 'jssha'

//Import Components
import composantMenu from './menu/menu.component'
import composantPresentation from './presentation/presentation.component'
import composantGalerie from './galerie/galerie.component'
import composantEquipe from './equipe/equipe.component'
import composantNosServices from './nosservices/nosservices.component'
import composantContact from './contact/contact.component'
import composantConnexion from './connexion/connexion.component'
//ADMIN
import composantMessages from './admin/messages/messages.component'
import composantProfil from './admin/profil/profil.component'
import composantListerGalerie from './admin/galerie/galerie.lister.component'
import composantAjouterGalerie from './admin/galerie/ajouter/galerie.ajouter.component'
import composantModifierGalerie from './admin/galerie/modifier/galerie.modifier.component'
import composantListerMembre from './admin/membre/membre.lister.component'
import composantAjouterMembre from './admin/membre/ajouter/membre.ajouter.component'
import composantModifierMembre from './admin/membre/modifier/membre.modifier.component'

//Import Services
import serviceUtilisateur from './utilisateur/utilisateur.service'
import serviceGrade from './grade/grade.service'
import serviceSession from './session/session.service'
import serviceString from './utils/string.service'
import serviceMenu from './menu/menu.service'
import serviceGalerie from './galerie/galerie.service'
import serviceContact from './contact/contact.service'
import serviceMembre from './admin/membre/membre.service'

// Services
import apiUrls from "./utils/apiUrls.service"
import frontUrls from "./utils/frontUrls.service"

angular.module('app', [
    RouteModule,
    uiBootstrap
])

    .value('jssha', jssha)
    .constant('apiUrls', apiUrls)
    .constant('frontUrls', frontUrls)

    //Services
    .service('serviceString', [serviceString])
    .service('serviceGrade', ['$http', 'apiUrls', serviceGrade])
    .service('serviceGalerie', ['$http', '$location', 'apiUrls', serviceGalerie])
    .service('serviceUtilisateur', ['$http', 'jssha', 'apiUrls', 'serviceGrade', serviceUtilisateur])
    .service('serviceContact', ['$http', 'apiUrls', serviceContact])
    .service('serviceMenu', ['$timeout', 'serviceContact', serviceMenu])
    .service('serviceSession', ['$http', 'jssha', '$location', 'serviceUtilisateur', 'serviceMenu', serviceSession])
    .service('serviceMembre', ['$location', 'serviceUtilisateur', serviceMembre])

    //Components
    .component('composantMenu', composantMenu)
    .component('composantPresentation', composantPresentation)
    .component('composantGalerie', composantGalerie)
    .component('composantEquipe', composantEquipe)
    .component('composantNosServices', composantNosServices)
    .component('composantContact', composantContact)
    .component('composantConnexion', composantConnexion)
    //ADMIN
    .component('composantMessages', composantMessages)
    .component('composantProfil', composantProfil)
    .component('composantListerGalerie', composantListerGalerie)
    .component('composantAjouterGalerie', composantAjouterGalerie)
    .component('composantModifierGalerie', composantModifierGalerie)
    .component('composantListerMembre', composantListerMembre)
    .component('composantAjouterMembre', composantAjouterMembre)
    .component('composantModifierMembre', composantModifierMembre)

    //images fallback
    .directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src !== attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    })

    //manage connections and routes
    .config(route)
    .run([
        '$rootScope',
        '$location',
        function (
            $rootScope,
            $location) {
            $rootScope.$on('$routeChangeStart', function (event) {

            });
        }
    ]);