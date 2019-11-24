package com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class DynamicAnalysisHelper {

    public static void main(String[] args) throws IOException {

        String csvFile = "build\\jacocoCsv.csv";
        String line = "";
        String delimiter = ",";
        int iterator = 0;

        FileWriter csvWriter = new FileWriter("DynamicAnalysis.csv");

        csvWriter.append("Class");
        csvWriter.append(",");
        csvWriter.append("LineCoveragePercentage");
        csvWriter.append("\n");

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            while ((line = br.readLine()) != null) {
                if (iterator == 0){
                    iterator++;
                    continue;
                }

                // use comma as separator
                String[] coveredClass = line.split(delimiter);
                String className = coveredClass[2];
                double missed = Double.parseDouble(coveredClass[7]);
                double covered = Double.parseDouble(coveredClass[8]);
                if(!className.equals("CSVReader")){
                    csvWriter.append(className+","+ (covered / (covered + missed)));
                    csvWriter.append("\n");
                }
                iterator++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        csvWriter.flush();
        csvWriter.close();

    }

}
