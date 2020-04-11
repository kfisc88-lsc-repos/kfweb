<?php include 'templates/head.html'; ?>
<?php include 'templates/navbar.html'; ?>

<!-- Content -->

    <div class="container">
        <h1 class="text-center">jQuery Assignments</h1>
        <hr class="header-hr mb-5">
    </div>

    <!-- Collapsible Container -->
    <div class="container">
        <div class="accordion" id="jqueryAssignments">

            <!-- Chapter 1 -->
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Chapter 1
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch1_index/index.html" class="list-group-item list-group-item-action">Chapter 1 Index Page</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 1 -->

            <!-- Chapter 2 -->
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link collapsed fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            Chapter 2
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch2_index/index.html" class="list-group-item list-group-item-action">Chapter 2 Index Page</a>
                        <a href="jQuery/ch2_index_exercises/index.html" class="list-group-item list-group-item-action">Exercises</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 2 -->

            <!-- Chapter 3 -->
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link collapsed fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Chapter 3
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch3_index/index.html" class="list-group-item list-group-item-action">Chapter 3 Index Page</a>
                        <a href="jQuery/ch3_index_exercises/index.html" class="list-group-item list-group-item-action">Exercises</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 3 -->

            <!-- Chapter 4 -->
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link collapsed fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour">
                            Chapter 4
                        </button>
                    </h2>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch4_index/index.html" class="list-group-item list-group-item-action">Chapter 4 Index Page</a>
                        <a href="jQuery/ch4_index_exercises/index.html" class="list-group-item list-group-item-action">Exercises</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 4 -->

            <!-- Chapter 5 -->
            <div class="card">
                <div class="card-header" id="headingFive">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link collapsed fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive">
                            Chapter 5
                        </button>
                    </h2>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch5_files/index.html" class="list-group-item list-group-item-action">Chapter 5 - Completed Exercises and Chapter Work</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 5 -->

            <!-- Chapter 6 -->
            <div class="card">
                <div class="card-header" id="headingSix">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link collapsed fc-quinary"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix">
                            Chapter 6
                        </button>
                    </h2>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#jqueryAssignments">
                    <div class="list-group">
                        <a href="jQuery/ch6_files/index.html" class="list-group-item list-group-item-action">Chapter 6 - Completed Exercises and Chapter Work</a>
                    </div>
                </div>
            </div>
            <!-- /Chapter 6 -->

        </div>
    </div>
    <!-- /Collapsible Container -->

<!-- /Content -->

<?php include 'templates/footer.html'; ?>
