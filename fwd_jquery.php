<?php include 'templates/head.html'; ?>
<?php include 'templates/navbar.html'; ?>

<!-- Content -->

<div class="container">
    <h1 class="text-center">jQuery Assignments</h1>
    <hr class="header-hr mb-5">
</div>
<div class="accordion" id="jqueryAssignments">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link fc-quinary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed fc-quinary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Chapter 2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#jqueryAssignments">
        <div class="list-group">
            <a href="jQuery/ch2_index/index.html" class="list-group-item list-group-action">Chapter 2 Index Page</a>
            <a href="jQuery/ch2_index_exercises/index.html" class="list-group-item list-group-item-action">Exercises</a>
        </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed fc-quinary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Chapter 3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#jqueryAssignments">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">empty</a>
        </div>
    </div>
  </div>
</div>

<!-- /Content -->

<?php include 'templates/footer.html'; ?>
