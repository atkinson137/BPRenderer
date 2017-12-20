function render (entity, grid, imageResolver) {
    return imageResolver(entity.name + "_" + (entity.direction || 0));
}

function renderShadow (entity, grid, imageResolver) {
    // No Shadow
}

function getKey (entity, grid) {
    return entity.direction || 0
}

function getSize (entity) {
    return [1, 1]
}

module.exports = {
    render,
    renderShadow,
    getKey,
    getSize
};