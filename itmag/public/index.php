<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ITMAG - Acasa</title>

    <link rel="stylesheet" href="./assets/css/pageLoader.css">

    <?php
    require_once("./includes/css.inc.php");
    ?>

    <?php
    require_once("./includes/fonts.inc.php");
    ?>
</head>

<body>
    <?php
    require_once("./includes/navbar.php");
    ?>

    <?php
    require_once("./includes/pageLoader.php");
    ?>


    <script src="./assets/js/navbar.js" type="module"> </script>
    <script src="./assets/js/index.js" type="module"> </script>
</body>

</html>