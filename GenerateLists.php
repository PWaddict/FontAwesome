<?php namespace ProcessWire;

    // Get icons
    /*$content = file_get_contents('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json');
    $json = json_decode($content);
    $icons = [];*/

    // Generate solid + brand list for icons.inc
    /*foreach ($json as $icon => $value) {
        foreach ($value->styles as $style) {
            if ($style == "regular") continue;
            echo $icons[] = 'fa-'.$icon . "<br>";
        }
    }*/

    // Generate only brand list for InputfieldIcon.js
    /*foreach ($json as $icon => $value) {
        foreach ($value->styles as $style) {
            if ($style == "regular" || $style == "solid") continue;
            echo $icons[] = "^fa-" . $icon . "$|";
        }
    }*/

    // Generate only brand list for FontAwesome.js
    /*foreach ($json as $icon => $value) {
        foreach ($value->styles as $style) {
            if ($style == "regular" || $style == "solid") continue;
            echo $icons[] = "i.fa-" . $icon . ", ";
        }
    }*/

?>