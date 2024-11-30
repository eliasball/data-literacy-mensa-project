collectors = {}

function add_collector(name) {
    collectors[name] = []
    create_collector(name)
}

function add(name) {
    collectors[name].push(Date.now())
    update_collector(name)
}

function remove_last(name) {
    collectors[name].pop()
    update_collector(name)
}

function create_collector(name) {
    const collector = $(`
        <div class="col">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title text-center mb-2">${name}</h5>
                    <div class="row">
                    <div class="col-3">
                        <button class="btn btn-danger w-100 btn-counter" onclick="remove_last('${name}')">-</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary w-100 btn-counter" onclick="add('${name}')">+</button>
                    </div>
                    </div>
                    <h4 class="card-text text-center mt-2" id="counter-${name}">0</h4>
                </div>
            </div>
        </div>`)
    $("#collector-row").append(collector)
}

function update_collector(name) {
    $(`#counter-${name}`).text(collectors[name].length)
}

function export_data() {
    // Based on https://stackoverflow.com/a/30800715
    const download_data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(collectors, null, 2));
    $('#download-anchor').attr('href', download_data).attr('download', 'data.json')
    $('#download-anchor')[0].click()
}

$(document).ready(function () {
    $("#create-collector").on("click", function () {
        const name = $("#create-collector-name").val()
        if (name === "" || collectors[name] !== undefined) {
            return
        }
        add_collector(name.replace(/\s/g, "_"))
        $("#create-collector-name").val("")
    })

    $("#export").on("click", function () {
        export_data()
    })
})