<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{


    #[Route('/', name: 'app_evenement_calendar', methods: ['GET'])]
    public function calendar(): Response
    {
        return $this->render('evenement/calendar.html.twig');
    }
}
