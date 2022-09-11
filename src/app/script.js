var users = mongodb.users;
var classes = mongodb.classe;


function get_indice_users(id_ask) {
    for (var test = 0; test < users.length; test++) {
        if (id_ask == users[test].id_user) {
            return test;
        }
    }
}

function get_calendar(i) {
    var horraire = []; // liste des horraires
    if (users[i].role == "prof") {
        for (var a = 0; a < classes.length; a++) {
            for (var b = 0; b < classes[a].matiere.length; b++) {
                if (classes[a].matiere[b].id_prof == users[i].id_user) {
                    horraire.push([classes[a].nom_classe, classes[a].matiere[b].nom, classes[a].matiere[b].horraires])
                }
            }
        }
    }
    else if (users[i].role == "eleve") {

        for (var a = 0; a < classes.length; a++) {
            if (classes[a].nom_classe == users[i].classe) {
                horraire.push(classes[a].nom_classe)
                for (var b = 0; b < classes[a].matiere.length; b++) {
                    horraire.push([classes[a].matiere[b].nom, classes[a].matiere[b].horraires])
                }
            }
        }
    }
    else if (users[i].role == "parent") {
        for (var a = 0; a < users[i].id_enfants.length; a++) {
            var j = get_indice_users(users[i].id_enfants[a])
            console.log(users[i].id_enfants[a], a)
            horraire.push(users[j].prenom)
            for (var b = 0; b < classes.length; b++) {
                if (classes[b].nom_classe == users[j].classe) {
                    for (var c = 0; c < classes[b].matiere.length; c++) {
                        horraire.push([classes[b].matiere[c].nom, classes[b].matiere[c].horraires])
                    }
                }
            }
        }
    }
    return horraire;
}


function getListEleveClasse(nom_classe) { //! done 
    for (var j = 0; j < classes.length; j++) {
        if (nom_classe == classes[j].nom_classe) {
            return classes[j].id_eleve;
        }
    }
}

function getListMention(i) { //! done
    var list_mention = [];
    if (users[i].role === "eleve") {
        for (var b = 0; a < users[i].message_mention.length; b++) {
            list_mention.push([users[i].message_mention[b].mention, users[i].message_mention[b].matiere, users[i].message_mention[b].date])
        }
    }
    else if (users[i].role === "parent") {
        for (var a = 0; a < users[i].id_enfants.length; a++) {
            var j = get_indice_users(users[i].id_enfants[a])
            if (users[j].message_mention.length != 0) {
                for (var b = 0; b < users[j].message_mention.length; b++) {
                    list_mention.push([users[j].message_mention[b].mention, users[j].message_mention[b].matiere, users[j].message_mention[b].date])
                }

            }
        }
    }
    return list_mention;
}

function addMention(id_eleve, mention, debut, fin, matiere) { //! done
    if (users[i].role === "prof") {
        var mentionobj = {
            "matiere": "",
            "id_prof": "",
            "date": {
                "debut": "",
                "fin": ""
            },
            "mention": "",
            "reponse": ""
        };
        mentionobj.matiere = matiere;
        mentionobj.id_prof = users[i].id_user;
        mentionobj.mention = mention;
        mentionobj.date.debut = debut;
        mentionobj.date.fin = fin;
        j = get_indice_users(id_eleve);
        users[j].message_mention.push(mentionobj);
        var message_return = [mention, "appliqué à", users[j].prenom, users[j].nom];
        return message_return;
    }
}

function deleteMention(id_eleve, matiere, jour, debut, fin, mention) { //!  done
    if (users[i].role === "prof") {

        j = get_indice_users(id_eleve);
        for (var a = 0; a < users[j].message_mention.length; a++) {
            if (users[j].message_mention[a].matiere == matiere) {
                if (users[j].message_mention[a].mention == mention) {
                    if (users[j].message_mention[a].date[0].jour == jour) {
                        if (users[j].message_mention[a].date[0].debut == debut) {
                            if (users[j].message_mention[a].date[0].fin == fin) {
                                delete users[j].message_mention[a];
                                //users[j].message_mention[a].splice(a, 1);
                            }
                        }
                    }
                }
            }
        }
    }
}

function sendMessage(id_eleve, mention, jour, debut, fin, matiere, message) { //! done
    if (users[i].role === "parent") {
        j = get_indice_users(id_eleve);
        for (var a = 0; a < users[j].message_mention.length; a++) {

            if (users[j].message_mention[a].matiere == matiere) {

                if (users[j].message_mention[a].mention == mention) {

                    if (users[j].message_mention[a].date[0].debut == debut) {

                        if (users[j].message_mention[a].date[0].fin == fin) {

                            users[j].message_mention[a].reponse = message;
                        }
                    }
                }
            }
        }
    }
}


function EditScheduler(nom_classe, matiere, heure, heure_tochange) {
    for (var a = 0; a < classes.length; a++) {
        if (classes[a].nom_classe == nom_classe) {
            for (var b = 0; b < classes[a].matiere.length; b++) {
                if (classes[a].matiere[b].nom == matiere) {
                    for (var c = 0; c < classes[a].matiere[b].horraires.length; c++) {
                        for (var d = 0; d < classes[a].matiere[b].horraires[c].heure.length; d++) {
                            if (classes[a].matiere[b].horraires[c].heure[d] == heure) {
                                classes[a].matiere[b].horraires[c].heure[d] = heure_tochange;
                                classes[a].matiere[b].horraires[c].jour = jour_tochange;
                            }
                        }

                    }
                }
            }
        }
    }
}

function editUserMail(id_user, to_change) {
    var a = get_indice_users(id_user);
    users[a].email = to_change
}

function editUserPassWord(id_user, to_change) {
    var a = get_indice_users(id_user);
    users[a].mot_de_passe = to_change;
}

function editUserClassEleve(id_user, to_change) {
    var a = get_indice_users(id_user);
    if (users[a].role == 'eleve') {
        users[a].classe = to_change;
    }
}


var i = 5