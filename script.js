function changeSection(section) {
    const sections = document.querySelectorAll('.content > section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function revealStory(memoryId) {
    const stories = {
        1: 'Fim de tarde dourado nas montanhas. O crepúsculo marca o fim de um ciclo eterno.',
        2: 'A cidade dos sonhos, iluminada por estrelas artificiais e sonhos ainda não realizados.',
        3: 'Uma floresta envolta em mistério, onde segredos sussurram pelos ventos e criaturas antigas vagam entre as árvores.',
        4: 'O oceano ao amanhecer, onde as ondas sussurram segredos de tempos passados, e o horizonte se funde com o céu em um encontro sereno.',
        5: 'As montanhas cobertas de neve, imponentes e silenciosas, guardam histórias de jornadas e conquistas gravadas nas pedras frias.'
    };

    alert(stories[memoryId] || 'História ainda não registrada. Continue explorando.');
}
