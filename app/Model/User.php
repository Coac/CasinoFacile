<?php

class User extends AppModel {
    public $idUser = 0;
    public $name = 'User';
    public $validate = array(
        'username' => array(
            'required' => array(
                'rule' => array('notEmpty'),
                'message' => 'Un login est obligatoire'
            ),
            'checkLoginlUsed' => array(
                'rule' => array('checkLoginUsed'),
                'message' => 'Un compte utilisateur existe déjà ce login'
            )
        ),
        'password' => array(
            'required' => array(
                'rule' => array('notEmpty'),
                'message' => 'Un mot de passe est requis'
            )
        ),
        
    );
  
    
    public function checkLoginUsed($aCheck){
        $sCheck = $aCheck['username'];
        //Check login
        $aLogin = $this->find('first', array(
            'conditions' => array('User.username' => $sCheck)
        ));
        if(isset($aLogin['User']) && $aLogin['User']['id'] == $this->idUser){
           return true;
        }
        if(count($aLogin)>0){
            return false;
        }
        
        return true;
    }
    

}
