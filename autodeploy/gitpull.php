<?php
$contents = file_get_contents('gitpull.sh');
echo shell_exec($contents);
?>