<?php
    if ($_SERVER['REQUEST_METHOD'] == "GET")
    {
        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('./tapes'));

        $files = array(); 
    
        foreach ($rii as $file)
        {
            if ($file->isDir()) continue;
    
            $files[] = $file->getPathname(); 
        }
        echo(json_encode($files));
    }
?>