<?php

namespace frontend\controllers;

use Yii;
use common\models\Curso;
use common\models\CursoSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CursoController implements the CRUD actions for Curso model.
 */
class JogadaController extends Controller
{
    /**
     * @inheritdoc
     */

    /**
     * Lists all Curso models.
     * @return mixed
     */
    public function actionPlay()
    {
        $playModel = new CursoSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('user', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Curso model.
     * @param integer $id
     * @return mixed
     */
    public function actionRanking($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Curso model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */

    public function actionSave () {

          if (!Yii::$app->user->isGuest) {
              $pontuacao = Yii::$app->request->post('pontuacao');
              $user = Yii::$app->user->identity->id;
              $jogada = new Jogada;
              $jogada->id_user = $user;
              $jogada->pontuacao = $pontuacao;

                if ($jogada->save()) {

                    return 1;
                    } else {

                      return 0;
                      }

                      }

}
}
