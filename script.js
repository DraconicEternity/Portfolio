$(document).ready(function(){
    // this is an constant with all dutch or english text for the site
    const translations = {
        NL: {
            // Menu
            'page.title': 'Djordy Portfolio',
            'language.title': 'Kies een taal',

            // navbar
            'nav.home': 'Home',
            'nav.about': 'Over mij',
            'nav.projects': 'Projecten',
            'nav.skills': 'Vaardigheden',
            'nav.contact': 'Contact',

            // home
            'hero.greeting': 'Hallo, mijn naam is',
            'hero.rolePrefix': 'Ik ben een',
            developer: 'Developer',
            'hero.learnMore': 'Meer weten',

            // featured project
            'featured.label': 'Uitgelicht project',
            'featured.status': 'In ontwikkeling',
            'featured.toolsLabel': 'Gebruikte tools',
            'featured.date': 'Gestart: 2025 (ongeveer)',
            'featured.title': 'MetamorPhection',
            'featured.description': 'A choose your own adventure visual novel game that i have been working  on for the past year. Link Brings you to my general GitHub page.',

            // about me
            'about.title': 'Over mij',
            'about.intro': 'Ik ben Djordy en ik ben een',
            'about.description': 'Hallo, ik ben Djordy Roke, een beginnende softwareontwikkelaar uit Nederland. Deze pagina vertelt wie ik ben en wat ik doe. Mijn hobby’s zijn gamen, boogschieten, fietsen, tekenen en alles wat met technologie te maken heeft. Ik heb ervaring met zowel hardware als software. Meer weten over mijn opleiding of een uitgebreider inzicht in mijn vaardigheden? Bekijk of download mijn cv via de knop hieronder.',
            'about.downloadCv': 'Download cv',

            // projects
            'projects.title': 'Projecten',
            'projects.status': 'In ontwikkeling',
            'projects.toolsLabel': 'Gebruikte tools',
            'projects.blender.title': '3D-animatie en Sculpten',
            'projects.blender.status': 'Altijd in ontwikkeling',
            'projects.blender.description': 'Ik leer hoe ik een 3D-personage maak en bewerk in Blender. Ik ben in 2020 begonnen met Blender, maar neem het de laatste tijd serieuzer.',
            'projects.blender.date': '14 / 12 / 2020 tot heden',
            'projects.art.title': '2D-animatie en digitale kunst',
            'projects.art.status': 'Altijd in ontwikkeling',
            'projects.art.description': 'Ik leer animeren met 2D-animatiesoftware en verbeter mijn tekenstijl en anatomie.',
            'projects.art.date': '- / 7 / 2018 tot heden',

            // skills
            'skills.title': 'Vaardigheden',
            'skills.heading': 'Mijn creatieve vaardigheden en kennis.',
            'skills.description': 'Hier krijg je inzicht in de programmeertalen waarin ik kan coderen en hoeveel ik ervan weet ook heb ik wat van mijn veel gebruikte software genoteerd. Wil je meer lezen over de tools die ik gebruik of de projecten die ik aan het maken ben? Klik op de knop hieronder.',
            'skills.readMore': 'Lees meer',

            // contact
            'contact.title': 'Contact',
            'contact.heading': 'Laten we praten',
            'contact.description': 'Als je contact met me opneemt, kunnen we kijken of we een goede match zijn. Vertel in je bericht wat je van mij verwacht, zodat ik je zo goed mogelijk kan antwoorden.',
            'contact.name': 'Naam',
            'contact.address': 'Adres',
            'contact.location': 'Heemskerk, Nederland',
            'contact.email': 'E-mail',
            'contact.formHeading': 'Stuur me een bericht',
            'form.name': 'Naam',
            'form.email': 'E-mail',
            'form.subject': 'Onderwerp',
            'form.message': 'Bericht..',
            'form.submit': 'Verstuur bericht',
            'footer.createdBy': 'Gemaakt door',
            'footer.rights': '2026 Alle rechten voorbehouden.'
        },
        EN: {
            // Menu
            'page.title': 'Djordy Portfolio',
            'language.title': 'Choose a language',

            // navbar
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.skills': 'Skills',
            'nav.contact': 'Contact',

            // home
            'hero.greeting': 'Hello, my name is',
            'hero.rolePrefix': "I'm a",
            developer: 'Developer',
            'hero.learnMore': 'Learn more',

            // featured project
            'featured.label': 'Featured project',
            'featured.status': 'In development',
            'featured.toolsLabel': 'Tools used',
            'featured.date': 'Started: 2025 (approx.)',
            'featured.title': 'MetamorPhection',
            'featured.description': 'A choose your own adventure visual novel game that i have been working  on for the past year. Link Brings you to my general GitHub page.',

            // about me
            'about.title': 'About me',
            'about.intro': "I'm Djordy and I'm a",
            'about.description': "Hello, I'm Djordy Roke, an aspiring software developer from the Netherlands. This page tells you who I am and what I do. My hobbies include gaming, archery, cycling, drawing, and anything related to technology. I have experience with both hardware and software. Want to learn more about my education or get a closer look at my skills? View or download my CV using the button below.",
            'about.downloadCv': 'Download CV',

            // projects
            'projects.title': 'Projects',
            'projects.status': 'In development',
            'projects.toolsLabel': 'Tools used',
            'projects.blender.title': '3D animation and sculpting',
            'projects.blender.status': 'Always in development',
            'projects.blender.description': "I'm learning how to create and edit a 3D character in Blender. I started learning Blender in 2020, but have been taking it more seriously recently.",
            'projects.blender.date': '14 / 12 / 2020 to present',
            'projects.art.title': '2D animation and digital art',
            'projects.art.status': 'Always in development',
            'projects.art.description': "I'm learning to animate with 2D animation software and improve my drawing style and anatomy.",
            'projects.art.date': '- / 7 / 2018 to present',

            // skills
            'skills.title': 'Skills',
            'skills.heading': 'My creative skills and knowledge.',
            'skills.description': 'Here you can see which programming languages I can code in and how much I know about them i have also noted down some of the software i use often. Want to read more about the tools i use or projects that i am creating? Click the button below.',
            'skills.readMore': 'Read more',

            // contact
            'contact.title': 'Contact',
            'contact.heading': "Let's talk",
            'contact.description': "Get in touch so we can see if we're a good match. Let me know what you expect from me in your message, so I can give you the best possible response.",
            'contact.name': 'Name',
            'contact.address': 'Address',
            'contact.location': 'Heemskerk, the Netherlands',
            'contact.email': 'Email',
            'contact.formHeading': 'Send me a message',
            'form.name': 'Name',
            'form.email': 'Email',
            'form.subject': 'Subject',
            'form.message': 'Message..',
            'form.submit': 'Send message',
            'footer.createdBy': 'Created by',
            'footer.rights': '2026 All rights reserved.'
        }
    };

    function setLanguage(language) {
        const selectedLanguage = translations[language] ? language : 'NL';
        const languageTexts = translations[selectedLanguage];

        document.documentElement.lang = selectedLanguage === 'NL' ? 'nl' : 'en';
        $('#language-selected').text(selectedLanguage);
        $('input[name="language"]').prop('checked', function() {
            return this.value === selectedLanguage;
        });
        $('[data-i18n]').each(function() {
            const translation = languageTexts[$(this).data('i18n')];
            if (translation !== undefined) {
                $(this).text(translation);
            }
        });
        $('[data-i18n-placeholder]').each(function() {
            const translation = languageTexts[$(this).data('i18n-placeholder')];
            if (translation !== undefined) {
                $(this).attr('placeholder', translation);
            }
        });
        $('#scroll-up-btn')
            .attr('aria-label', selectedLanguage === 'NL' ? 'Scroll naar boven' : 'Scroll to top')
            .attr('title', selectedLanguage === 'NL' ? 'Scroll naar boven' : 'Scroll to top');
        $('.language-dropdown').attr('aria-label', selectedLanguage === 'NL' ? 'Selecteer taal' : 'Select language');
        $('.menu-button').attr('aria-label', selectedLanguage === 'NL' ? 'Menu openen' : 'Open menu');
        localStorage.setItem('language', selectedLanguage);
    }

    const savedLanguage = localStorage.getItem('language');
    setLanguage(savedLanguage === 'EN' ? 'EN' : 'NL');

    // Language dropdown
    $('.language-dropdown').click(function(e) {
        e.stopPropagation();

        // Close menu
        $('.menu-bar').removeClass('menu-open');

        $('.language-dropdown-container').toggleClass('open');
        $(this).toggleClass('open');
        $(this).attr('aria-expanded', $('.language-dropdown-container').hasClass('open'));
    });

    // Mobile menu
    $('.menu-button').click(function(e) {
        e.stopPropagation();

        // Close language dropdown
        $('.language-dropdown-container').removeClass('open');
        $('.language-dropdown').removeClass('open');
        $('.language-dropdown').attr('aria-expanded', 'false');

        // Toggle mobile menu
        $('.menu-bar').toggleClass('menu-open');
        const icon = $(this).find('svg');

        if ($('.menu-bar').hasClass('menu-open')) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-xmark');
            $(this).attr('aria-expanded', 'true').attr('aria-label', document.documentElement.lang === 'nl' ? 'Menu sluiten' : 'Close menu');
        } else {
            icon.removeClass('fa-xmark');
            icon.addClass('fa-bars');
            $(this).attr('aria-expanded', 'false').attr('aria-label', document.documentElement.lang === 'nl' ? 'Menu openen' : 'Open menu');
        }
    });

    // Close the menu when you go to a section
    $('.menu-items a').click(function() {
        $('.menu-bar').removeClass('menu-open');

        const icon = $('.menu-button').find('svg');

        icon.removeClass('fa-xmark');
        icon.addClass('fa-bars');
        $('.menu-button').attr('aria-expanded', 'false').attr('aria-label', document.documentElement.lang === 'nl' ? 'Menu openen' : 'Open menu');
    });

    // Change language
    $('input[name="language"]').on('change', function() {
        setLanguage(this.value);

        $('.language-dropdown-container').removeClass('open');
        $('.language-dropdown').removeClass('open');
        $('.language-dropdown').attr('aria-expanded', 'false');
    });

    // Close dropdown when clicking outside
    $(document).click(function() {
        $('.language-dropdown-container').removeClass('open');
        $('.language-dropdown').removeClass('open');
        $('.language-dropdown').attr('aria-expanded', 'false');
    });

    // when you scroll
    $(window).scroll(function(){

        // Your existing sticky navbar
        if(this.scrollY > 20){
            $('.menu-bar').addClass("sticky");
            $('#menu-logo').attr("src", "./images/Logo_Scrolled.png");
        }else{
            $('.menu-bar').removeClass("sticky");
            $('#menu-logo').attr("src", "./images/Logo_Main.png");
        }

        // Your existing Home expansion
        if(this.scrollY > 40){
            $('.home').addClass("scrolled");
        }else{
            $('.home').removeClass("scrolled");
        }

        // Scroll-up button
        if(this.scrollY > 500){
            $('#scroll-up-btn').addClass("show");
        }else{
            $('#scroll-up-btn').removeClass("show");
        }
    });

    $('#scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $(window).trigger('scroll');
})