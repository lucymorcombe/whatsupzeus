$(document).ready(function () {

    $(".titleCloud").fadeTo(20, 0.01);
    $(".world").click(function () {

        $(".titleCloud").fadeTo(1100, 1);
        $(".starsCloud").delay(600).fadeTo(2400, 1);
        $(".familyCloud").delay(1000).fadeTo(2400, 1);
        $(".creaturesCloud").delay(1400).fadeTo(2400, 1);

    });


    //stars

    $("#main").hide();

    $("#myCheckbox").click(function () {
        //        $("body").toggleClass("stars2");
        $("body").toggleClass("gradToggle");
        $("#starsIntro").toggleClass("hidden");
        $("#main").delay(100).fadeToggle(400);
        $(".vineLeft2").fadeToggle(50);
        $(".vineRight2").fadeToggle(50);

        if ($("body").width() <= 800) {
            $(".best").delay(100).fadeToggle(400);
        }
    });

    // Get page-width on page load
    var width = $("body").width();

    // Create function so we can reuse on page-load and resize
    function doStuff() {
        if (width <= 800) {
            $(".titleCloud").fadeTo(1, 1);
            $(".world").off("click");
        } else {

        }
    }

    // Run function
    doStuff();

    // Update page-width on window resize
    $(window).resize(function () {
        // Update width
        width = $("body").width();
        // Run function
        doStuff();
    });


    $("#andromeda").click(function () {
        $(".starsinfo").hide();
        $(".andromedainfo").show();
    });

    $("#mobAndromeda").click(function () {
        $(".starsinfo").hide();
        $(".andromedainfo").show();
    })

    $("#aquarius").click(function () {
        $(".starsinfo").hide();
        $(".aquariusinfo").show();
    });

    $("#mobAquarius").click(function () {
        $(".starsinfo").hide();
        $(".aquariusinfo").show();
    });

    $("#aquila").click(function () {
        $(".starsinfo").hide();
        $(".aquilainfo").show();
    });

    $("#mobAquila").click(function () {
        $(".starsinfo").hide();
        $(".aquilainfo").show();
    });

    $("#aries").click(function () {
        $(".starsinfo").hide();
        $(".ariesinfo").show();
    });

    $("#mobAries").click(function () {
        $(".starsinfo").hide();
        $(".ariesinfo").show();
    });

    $("#cancer").click(function () {
        $(".starsinfo").hide();
        $(".cancerinfo").show();
    });

    $("#mobCancer").click(function () {
        $(".starsinfo").hide();
        $(".cancerinfo").show();
    });

    $("#capricornus").click(function () {
        $(".starsinfo").hide();
        $(".capricornusinfo").show();
    });

    $("#mobCapricornus").click(function () {
        $(".starsinfo").hide();
        $(".capricornusinfo").show();
    });

    $("#cassiopeia").click(function () {
        $(".starsinfo").hide();
        $(".cassiopeiainfo").show();
    });

    $("#mobCassiopeia").click(function () {
        $(".starsinfo").hide();
        $(".cassiopeiainfo").show();
    });

    $("#cepheus").click(function () {
        $(".starsinfo").hide();
        $(".cepheusinfo").show();
    });

    $("#mobCepheus").click(function () {
        $(".starsinfo").hide();
        $(".cepheusinfo").show();
    });

    $("#coronaBorealis").click(function () {
        $(".starsinfo").hide();
        $(".cbinfo").show();
    });

    $("#mobCoronaBorealis").click(function () {
        $(".starsinfo").hide();
        $(".cbinfo").show();
    });

    $("#cygnus").click(function () {
        $(".starsinfo").hide();
        $(".cygnusinfo").show();
    });

    $("#mobCygnus").click(function () {
        $(".starsinfo").hide();
        $(".cygnusinfo").show();
    });

    $("#delphinus").click(function () {
        $(".starsinfo").hide();
        $(".delphinusinfo").show();
    });

    $("#mobDelphinus").click(function () {
        $(".starsinfo").hide();
        $(".delphinusinfo").show();
    });

    $("#draco").click(function () {
        $(".starsinfo").hide();
        $(".dracoinfo").show();
    });

    $("#mobDraco").click(function () {
        $(".starsinfo").hide();
        $(".dracoinfo").show();
    });

    $("#gemini").click(function () {
        $(".starsinfo").hide();
        $(".geminiinfo").show();
    });

    $("#mobGemini").click(function () {
        $(".starsinfo").hide();
        $(".geminiinfo").show();
    });

    $("#hercules").click(function () {
        $(".starsinfo").hide();
        $(".herculesinfo").show();
    });

    $("#mobHercules").click(function () {
        $(".starsinfo").hide();
        $(".herculesinfo").show();
    });

    $("#leo").click(function () {
        $(".starsinfo").hide();
        $(".leoinfo").show();
    });

    $("#mobLeo").click(function () {
        $(".starsinfo").hide();
        $(".leoinfo").show();
    });

    $("#lyra").on("click", function () {
        $(".starsinfo").hide();
        $(".lyrainfo").show();
    });

    $("#mobLyra").on("click", function () {
        $(".starsinfo").hide();
        $(".lyrainfo").show();
    });

    $("#orion").on("click", function () {
        $(".starsinfo").hide();
        $(".orioninfo").show();
    });

    $("#mobOrion").on("click", function () {
        $(".starsinfo").hide();
        $(".orioninfo").show();
    });

    $("#pegasuscon").on("click", function () {
        $(".starsinfo").hide();
        $(".pegasusinfo").show();
    });

    $("#mobPegasuscon").on("click", function () {
        $(".starsinfo").hide();
        $(".pegasusinfo").show();
    });

    $("#perseus").on("click", function () {
        $(".starsinfo").hide();
        $(".perseusinfo").show();
    });

    $("#mobPerseus").on("click", function () {
        $(".starsinfo").hide();
        $(".perseusinfo").show();
    });

    $("#pisces").on("click", function () {
        $(".starsinfo").hide();
        $(".piscesinfo").show();
    });

    $("#mobPisces").on("click", function () {
        $(".starsinfo").hide();
        $(".piscesinfo").show();
    });

    $("#sagittarius").on("click", function () {
        $(".starsinfo").hide();
        $(".sagittariusinfo").show();
    });

    $("#mobSagittarius").on("click", function () {
        $(".starsinfo").hide();
        $(".sagittariusinfo").show();
    });

    $("#scorpius").on("click", function () {
        $(".starsinfo").hide();
        $(".scorpiusinfo").show();
    });

    $("#mobScorpius").on("click", function () {
        $(".starsinfo").hide();
        $(".scorpiusinfo").show();
    });

    $("#taurusLeft").on("click", function () {
        $(".starsinfo").hide();
        $(".taurusinfo").show();
    });

    $("#mobTaurusLeft").on("click", function () {
        $(".starsinfo").hide();
        $(".taurusinfo").show();
    });

    $("#taurusRight").on("click", function () {
        $(".starsinfo").hide();
        $(".taurusinfo").show();
    });

    $("#mobTaurusRight").on("click", function () {
        $(".starsinfo").hide();
        $(".taurusinfo").show();
    });

    $("#ursaMajor").on("click", function () {
        $(".starsinfo").hide();
        $(".ursamajorinfo").show();
    });

    $("#mobUrsaMajor").on("click", function () {
        $(".starsinfo").hide();
        $(".ursamajorinfo").show();
    });

    $("#ursaMinor").on("click", function () {
        $(".starsinfo").hide();
        $(".ursaminorinfo").show();
    });

    $("#mobUrsaMinor").on("click", function () {
        $(".starsinfo").hide();
        $(".ursaminorinfo").show();
    });

    $("#eridanus").on("click", function () {
        $(".starsinfo").hide();
        $(".eridanusinfo").show();
    });

    $("#mobEridanus").on("click", function () {
        $(".starsinfo").hide();
        $(".eridanusinfo").show();
    });

    $("#cetus").on("click", function () {
        $(".starsinfo").hide();
        $(".cetusinfo").show();
    });

    $("#mobCetus").on("click", function () {
        $(".starsinfo").hide();
        $(".cetusinfo").show();
    });

    $("#virgo").on("click", function () {
        $(".starsinfo").hide();
        $(".virgoinfo").show();
    });

    $("#mobVirgo").on("click", function () {
        $(".starsinfo").hide();
        $(".virgoinfo").show();
    });



    $(".close").click(function () {
        $(".andromedainfo").fadeOut(400);
        $(".aquariusinfo").fadeOut(400);
        $(".aquilainfo").fadeOut(400);
        $(".ariesinfo").fadeOut(400);
        $(".cancerinfo").fadeOut(400);
        $(".capricornusinfo").fadeOut(400);
        $(".cassiopeiainfo").fadeOut(400);
        $(".cepheusinfo").fadeOut(400);
        $(".cbinfo").fadeOut(400);
        $(".cygnusinfo").fadeOut(400);
        $(".delphinusinfo").fadeOut(400);
        $(".dracoinfo").fadeOut(400);
        $(".geminiinfo").fadeOut(400);
        $(".herculesinfo").fadeOut(400);
        $(".leoinfo").fadeOut(400);
        $(".lyrainfo").fadeOut(400);
        $(".orioninfo").fadeOut(400);
        $(".pegasusinfo").fadeOut(400);
        $(".perseusinfo").fadeOut(400);
        $(".piscesinfo").fadeOut(400);
        $(".sagittariusinfo").fadeOut(400);
        $(".scorpiusinfo").fadeOut(400);
        $(".taurusinfo").fadeOut(400);
        $(".ursamajorinfo").fadeOut(400);
        $(".ursaminorinfo").fadeOut(400);
        $(".eridanusinfo").fadeOut(400);
        $(".cetusinfo").fadeOut(400);
        $(".virgoinfo").fadeOut(400);

    });

    $(".mobClose").click(function () {
        $(".andromedainfo").fadeOut(400);
        $(".aquariusinfo").fadeOut(400);
        $(".aquilainfo").fadeOut(400);
        $(".ariesinfo").fadeOut(400);
        $(".cancerinfo").fadeOut(400);
        $(".capricornusinfo").fadeOut(400);
        $(".cassiopeiainfo").fadeOut(400);
        $(".cepheusinfo").fadeOut(400);
        $(".cbinfo").fadeOut(400);
        $(".cygnusinfo").fadeOut(400);
        $(".delphinusinfo").fadeOut(400);
        $(".dracoinfo").fadeOut(400);
        $(".geminiinfo").fadeOut(400);
        $(".herculesinfo").fadeOut(400);
        $(".leoinfo").fadeOut(400);
        $(".lyrainfo").fadeOut(400);
        $(".orioninfo").fadeOut(400);
        $(".pegasusinfo").fadeOut(400);
        $(".perseusinfo").fadeOut(400);
        $(".piscesinfo").fadeOut(400);
        $(".sagittariusinfo").fadeOut(400);
        $(".scorpiusinfo").fadeOut(400);
        $(".taurusinfo").fadeOut(400);
        $(".ursamajorinfo").fadeOut(400);
        $(".ursaminorinfo").fadeOut(400);
        $(".eridanusinfo").fadeOut(400);
        $(".cetusinfo").fadeOut(400);
        $(".virgoinfo").fadeOut(400);


    });


    //meet the family

    // $(".zeusTrophy").hide();
    // $(".heraTrophy").hide();
    // $(".posTrophy").hide();
    // $(".demTrophy").hide();
    // $(".hadesTrophy").hide();
    // $(".hestiaTrophy").hide();
    // $(".heraStand").hide();
    // $(".posStand").hide();
    // $(".demStand").hide();
    // $(".hadesStand").hide();
    // $(".hestiaStand").hide();
    // $(".speechBubble").hide();
    // $(".ares").hide();
    // $(".aphrodite").hide();
    // $(".heph").hide();
    // $(".apollo").hide();
    // $(".artemis").hide();
    // $(".pers").hide();
    // $(".athena").hide();
    // $(".dion").hide();
    // $(".hermes").hide();
    $(".kids").hide();
    $(".zeusInfo1").hide();
    $(".zeusInfo2").hide();
    $(".zeusInfo3").hide();
    $(".zeusInfo4").hide();
    $(".zeusInfo5").hide();
    $(".zeusInfo6").hide();
    $(".heraInfo1").hide();
    $(".heraInfo2").hide();
    $(".posInfo1").hide();
    $(".posInfo2").hide();
    $(".demInfo1").hide();
    $(".demInfo2").hide();
    $(".hestiaInfo1").hide();
    $(".hestiaInfo2").hide();
    $(".hadesInfo1").hide();
    $(".hadesInfo2").hide();
    $(".hadesInfo3").hide();
    $(".hephInfo1").hide();
    $(".aresInfo1").hide();
    $(".aphInfo1").hide();
    $(".apolloInfo1").hide();
    $(".artemisInfo1").hide();
    $(".persInfo1").hide();
    $(".athenaInfo1").hide();
    $(".dionInfo1").hide();
    $(".hermesInfo1").hide();
    $(".hephTrophy").hide();
    $(".aresTrophy").hide();
    $(".aphTrophy").hide();
    $(".apolloTrophy").hide();
    $(".artemisTrophy").hide();
    $(".persTrophy").hide();
    $(".athenaTrophy").hide();
    $(".dionTrophy").hide();
    $(".hermesTrophy").hide();
    $(".back").hide();
    $(".famNextPage").hide();



    $(".zeusStand").click(function () {
        $(".zeusStand").fadeOut(200)
        $(".zeusTrophy").delay(200).fadeIn(500);
        $(".heraStand").delay(1100).fadeIn(1000);
        $(".demStand").delay(2000).fadeIn(1000);
        $(".hestiaStand").delay(2900).fadeIn(1000);
        $(".posStand").delay(3800).fadeIn(1000);
        $(".hadesStand").delay(4700).fadeIn(1000);
        $(".speechBubble").delay(5600).fadeIn(1000);
        $(".kids").delay(6500).fadeIn(1000);
    });

    $(".heraStand").click(function () {
        $(".heraStand").fadeOut(200)
        $(".heraTrophy").delay(200).fadeIn(500);
    });

    $(".demStand").click(function () {
        $(".demStand").fadeOut(200)
        $(".demTrophy").delay(200).fadeIn(500);
    });

    $(".hestiaStand").click(function () {
        $(".hestiaStand").fadeOut(200)
        $(".hestiaTrophy").delay(200).fadeIn(500);
    });

    $(".posStand").click(function () {
        $(".posStand").fadeOut(200)
        $(".posTrophy").delay(200).fadeIn(500);
    });


    $(".hadesStand").click(function () {
        $(".hadesStand").fadeOut(200)
        $(".hadesTrophy").delay(200).fadeIn(500);
    });


    $(".zeusTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".zeusInfo1").fadeIn(1200);
        $(".zeusInfo2").fadeIn(1200);
        $(".zeusInfo3").fadeIn(1200);
        $(".zeusInfo4").fadeIn(1200);
        $(".zeusInfo5").fadeIn(1200);
        $(".zeusInfo6").fadeIn(1200);
        $(".back").fadeIn(1200);
        $(".zeusTrophy").addClass("zeusFocus");
        if ($(".zeusInfo1").is(':visible')) {
            $(".posTrophy").hide();
            $(".demTrophy").hide();
            $(".hadesTrophy").hide();
            $(".hestiaTrophy").hide();
            $(".heraTrophy").hide();
            $(".gStand").hide();
        }
    });

    $(".heraTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".heraTrophy").addClass("heraFocus");
        $(".back").fadeIn(1200);
        $(".heraInfo1").fadeIn(1200);
        $(".heraInfo2").fadeIn(1200);
        if ($(".heraInfo1").is(':visible')) {
            $(".posTrophy").hide();
            $(".demTrophy").hide();
            $(".hadesTrophy").hide();
            $(".hestiaTrophy").hide();
            $(".zeusTrophy").hide();
            $(".gStand").hide();
        }
    });

    $(".demTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".back").fadeIn(1200);
        $(".demTrophy").addClass("demFocus");
        $(".demInfo1").fadeIn(1200);
        $(".demInfo2").fadeIn(1200);
        if ($(".demInfo1").is(':visible')) {
            $(".posTrophy").hide();
            $(".heraTrophy").hide();
            $(".hadesTrophy").hide();
            $(".hestiaTrophy").hide();
            $(".zeusTrophy").hide();
            $(".gStand").hide();
        }
    });

    $(".hestiaTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".back").fadeIn(1200);
        $(".hestiaTrophy").addClass("hestiaFocus");
        $(".hestiaInfo1").fadeIn(1200);
        $(".hestiaInfo2").fadeIn(1200);
        if ($(".hestiaInfo1").is(':visible')) {
            $(".posTrophy").hide();
            $(".heraTrophy").hide();
            $(".hadesTrophy").hide();
            $(".demTrophy").hide();
            $(".zeusTrophy").hide();
            $(".gStand").hide();
        }
    });

    $(".posTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".back").fadeIn(1200);
        $(".posTrophy").addClass("posFocus");
        $(".posInfo1").fadeIn(1200);
        $(".posInfo2").fadeIn(1200);
        if ($(".posInfo1").is(':visible')) {
            $(".heraTrophy").hide();
            $(".demTrophy").hide();
            $(".hadesTrophy").hide();
            $(".hestiaTrophy").hide();
            $(".zeusTrophy").hide();
            $(".gStand").hide();
        }
    });

    $(".hadesTrophy").click(function () {
        $(".speechBubble").hide();
        $(".heph").hide();
        $(".ares").hide();
        $(".aphrodite").hide();
        $(".apollo").hide();
        $(".artemis").hide();
        $(".athena").hide();
        $(".pers").hide();
        $(".dion").hide();
        $(".hermes").hide();
        $(".back").fadeIn(1200);
        $(".hadesTrophy").addClass("hadesFocus");
        $(".hadesInfo1").fadeIn(1200);
        $(".hadesInfo2").fadeIn(1200);
        $(".hadesInfo3").fadeIn(1200);
        if ($(".hadesInfo1").is(':visible')) {
            $(".posTrophy").hide();
            $(".demTrophy").hide();
            $(".heraTrophy").hide();
            $(".hestiaTrophy").hide();
            $(".zeusTrophy").hide();
            $(".gStand").hide();
        }
    });


    $(".heph").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".hephTrophy").fadeIn(500);
        $(".hephInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".ares").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".aresTrophy").fadeIn(500);
        $(".aresInfo1").fadeIn(500);
        $(".hephTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".hephInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".aphrodite").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".aphTrophy").fadeIn(500);
        $(".aphInfo1").fadeIn(500);
        $(".hephTrophy").hide();
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".hephInfo1").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
    });

    $(".apollo").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".apolloTrophy").fadeIn(500);
        $(".apolloInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".hephTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".hephInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".artemis").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".artemisTrophy").fadeIn(500);
        $(".artemisInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".hephTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".hephInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".pers").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".persTrophy").fadeIn(500);
        $(".persInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".hephTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".hephInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".athena").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".athenaTrophy").fadeIn(500);
        $(".athenaInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".hephTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".hephInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".dion").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".dionTrophy").fadeIn(500);
        $(".dionInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".hephTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".hephInfo1").hide();
        $(".hermesInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".hermes").click(function () {
        $(".gKids").fadeTo(200, 0.1);
        $(".hermesTrophy").fadeIn(500);
        $(".hermesInfo1").fadeIn(500);
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".athenaTrophy").hide();
        $(".persTrophy").hide();
        $(".dionTrophy").hide();
        $(".hephTrophy").hide();
        $(".aresInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".athenaInfo1").hide();
        $(".persInfo1").hide();
        $(".dionInfo1").hide();
        $(".hephInfo1").hide();
        $(".aphTrophy").hide();
        $(".aphInfo1").hide();
    });

    $(".back").click(function () {
        $(".gInfo").hide();
        $(".gTrophy").show();
        $(".back").hide();
        $(".speechBubble").show();
        $(".zeusTrophy").removeClass("zeusFocus");
        $(".heraTrophy").removeClass("heraFocus");
        $(".demTrophy").removeClass("demFocus");
        $(".hestiaTrophy").removeClass("hestiaFocus");
        $(".posTrophy").removeClass("posFocus");
        $(".hadesTrophy").removeClass("hadesFocus");
        $(".famNextPage").show();


    });

    $(".gTrophy").click(function () {
        $(".famNextPage").hide();
    });


    $(".kids").click(function () {
        $(".ares").fadeIn(1000);
        $(".heph").fadeIn(1000);
        $(".apollo").fadeIn(1000);
        $(".artemis").fadeIn(1000);
        $(".pers").fadeIn(1000);
        $(".athena").fadeIn(1000);
        $(".dion").fadeIn(1000);
        $(".hermes").fadeIn(1000);
        $(".aphrodite").fadeIn(1000);
        $(".famNextPage").delay(500).fadeIn(1000);


    });

    $(".close").click(function () {
        $(".hephInfo1").hide();
        $(".aresInfo1").hide();
        $(".aphInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".persInfo1").hide();
        $(".athenaInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".gKids").fadeTo(10, 1);
        $(".hephTrophy").hide();
        $(".aresTrophy").hide();
        $(".apolloTrophy").hide();
        $(".artemisTrophy").hide();
        $(".persTrophy").hide();
        $(".athenaTrophy").hide();
        $(".dionTrophy").hide();
        $(".hermesTrophy").hide();
        $(".aphTrophy").hide();

    });

    $(".mobEnter").click(function () {
        $(".world").hide();
        $(".mobEnter").hide();
        $(".familyCloud").fadeTo(1200, 1);
        $(".starsCloud").delay(800).fadeTo(1200, 1);
        $(".creaturesCloud").delay(1600).fadeTo(1200, 1);
    });

    $(".mobKids").click(function () {
        $(".aresTrophy").show();
        $(".hephTrophy").show();
        $(".apolloTrophy").show();
        $(".artemisTrophy").show();
        $(".persTrophy").show();
        $(".athenaTrophy").show();
        $(".dionTrophy").show();
        $(".hermesTrophy").show();
        $(".aphTrophy").show();
    });

    $(".mobZeusTrophy").on('click', function () {
        $(".zeusInfo6").fadeIn(500);
    });

    $(".mobHeraTrophy").on('click', function () {
        $(".heraInfo1").fadeIn(500);
    });

    $(".mobHadesTrophy").on('click', function () {
        $(".hadesInfo1").fadeIn(500);
    });

    $(".mobPosTrophy").on('click', function () {
        $(".posInfo1").fadeIn(500);
    });

    $(".mobDemTrophy").on('click', function () {
        $(".demInfo1").fadeIn(500);
    });

    $(".mobHestiaTrophy").on('click', function () {
        $(".hestiaInfo1").fadeIn(500);
    });

    $(".aresTrophy").on('click', function () {
        $(".aresInfo1").fadeIn(500);
    });

    $(".hephTrophy").on('click', function () {
        $(".hephInfo1").fadeIn(500);
    });

    $(".apolloTrophy").on('click', function () {
        $(".apolloInfo1").fadeIn(500);
    });

    $(".artemisTrophy").on('click', function () {
        $(".artemisInfo1").fadeIn(500);
    });

    $(".athenaTrophy").on('click', function () {
        $(".athenaInfo1").fadeIn(500);
    });

    $(".persTrophy").on('click', function () {
        $(".persInfo1").fadeIn(500);
    });

    $(".dionTrophy").on('click', function () {
        $(".dionInfo1").fadeIn(500);
    });

    $(".hermesTrophy").on('click', function () {
        $(".hermesInfo1").fadeIn(500);
    });

    $(".aphTrophy").on('click', function () {
        $(".aphInfo1").fadeIn(500);
    });


    $(".mobClose").on('click', function () {
        $(".hephInfo1").hide();
        $(".aresInfo1").hide();
        $(".aphInfo1").hide();
        $(".apolloInfo1").hide();
        $(".artemisInfo1").hide();
        $(".persInfo1").hide();
        $(".athenaInfo1").hide();
        $(".dionInfo1").hide();
        $(".hermesInfo1").hide();
        $(".zeusInfo6").hide();
        $(".heraInfo1").hide();
        $(".hadesInfo1").hide();
        $(".posInfo1").hide();
        $(".demInfo1").hide();
        $(".hestiaInfo1").hide();
        $(".aphInfo1").hide();

    });

});
