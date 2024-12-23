<?php

echo '<h2>Base de dades: Afusellats</h2>';
echo "<hr>";

// Añadimos el input de búsqueda
echo '<input type="text" id="searchInput" placeholder="Buscar...">';

// Añadimos el div donde se renderizará la tabla
echo '<div class="containers">';
echo '<table class="table table-striped" id="represaliatsTable">
        <thead>
        <tr>
            <th>Nom complet</th>
            <th>Municipi naixement</th>s
            <th>Municipi defunció</th>
            <th>Col·lectiu</th>
            <th>Modificar</th>
            <th>Eliminar</th>
        </tr>
        </thead>
        <tbody id="represaliatsBody">
        <!-- Aquí se insertarán las filas de la tabla dinámicamente -->
        </tbody>
    </table>';

// Paginación
echo '<div id="pagination">
        <button id="prevPage" disabled>Anterior</button>
        <span id="currentPage">1</span> de <span id="totalPages">1</span>
        <button id="nextPage">Siguiente</button>
    </div>';
echo '</div>';

?>


<?php
# footer
require_once(APP_ROOT . APP_DEV . '/public/php/footer.php');
?>
